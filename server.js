const { randomInt } = require('crypto');
const express = require('express')
const app = express()
const port = randomInt(3000, 9999)
const path = require('path');


// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});


app.listen(port, () => {
  // Code.....
})

// log the port interactions
console.log(`Server running at http://localhost:${port}/`);
