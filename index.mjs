// const express = require('express');
// const cors = require('cors');
// var bodyParser = require('body-parser');
// const fetch = require('node-fetch');
// const {verify} = require('hcaptcha');
// const rateLimit = require('express-rate-limit');
// const ejs = require('ejs');
// change require to import for above modules

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import {verify} from 'hcaptcha';
import rateLimit from 'express-rate-limit';
import ejs from 'ejs';

const app = express();

// require('dotenv').config();
import dotenv from 'dotenv';
const { PORT, CF_GLOBAL_APIKEY, CF_ZONE_ID, CF_EMAIL, HCAPTCHA_SECRET, HCAPTCHA_SITEKEY } = process.env;
const baseUrl = 'https://api.cloudflare.com/client/v4/zones/' + CF_ZONE_ID;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

const addLimit = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 250,
	message: 'Too many request from this IP, please try again after 15 minutes',
	standardHeaders: true,
	legacyHeaders: false,
  handler: function(req, res) {
    // lmao 200 OK
      res.status(200).send({
        success: false,
        errors: [
          {
            message: "Rate Limited",
            error_chain: [{
              message: "Slow down dude! You're too fast. Wait 15 minutes."
            }]
          }
        ]});
      },
})


app.get('/', async(req, res) => {
  res.render('index.html', { hcaptcha_sitekey:  HCAPTCHA_SITEKEY })
})

app.get('/success', async(req, res) => {
  res.sendFile(__dirname + '/views/success.html')
})

app.get('/github', async(req, res) => {
  res.redirect('https://github.com/pythonicboat/is-a.co')
})

app.get('/isexists', async(req, res) => {
  const q = req.query.q;
  const type = req.query.type;
  const dom = [];
  fetch(baseUrl + '/dns_records?type=' + type + '&match=all', {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "X-Auth-Email": CF_EMAIL,
      "X-Auth-Key": CF_GLOBAL_APIKEY,
    },
  }).then((d) => d.json()).then((x) => {
    if(x.success) {
      let result = x.result;
      for (var i = 0; i < result.length; i++) {
        dom.push(result[i].name)
      }
      res.status(200).json({
        result: dom.includes(q)
      })
    } else {
      console.log(x);
      res.sendStatus(500)
    }
  }).catch((x) => {
    console.log(x);
    res.sendStatus(500)
  })
})

app.post('/add', addLimit, async(req, res) => {
  const hcap = req.body['h-captcha-response'];
  let { subdomain, content } = req.body;

  const verif = await verify(HCAPTCHA_SECRET, hcap)
  // console.log(verif)
  // let verif = {
  //   success: true
  // }
  if(!verif.success) {
    res.sendStatus(400)
  } else {
    const data = {
      type: "CNAME",
      name: subdomain + ".is-a.co",
      content,
      ttl: 1,
      proxied: false
    }

    fetch(baseUrl + '/dns_records', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-Auth-Email": CF_EMAIL,
        "X-Auth-Key": CF_GLOBAL_APIKEY,
      },
      body: JSON.stringify(data),
    }).then((d) => d.json()).then((x) => {
      res.send(x)
    }).catch((x) => {
      res.sendStatus(500)
    })
  }
})

app.listen(() => {
  console.log("listen on port", PORT);
})
