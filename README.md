<div align="center">
  <h1> V2 COMING SOON! </h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://socialify.git.ci/pythonicboat/is-a.co/image?description=1&font=Raleway&forks=1&issues=1&owner=0&pattern=Solid&stargazers=1&theme=Dark">
    <img src="https://socialify.git.ci/pythonicboat/is-a.co/image?description=1&font=Raleway&forks=1&issues=1&owner=0&pulls=1&pattern=Solid&stargazers=1&theme=Light">
  </picture>
  <br/>
<img src="https://img.shields.io/github/actions/workflow/status/pythonicboat/is-a.co/tests.yml?branch=master&label=tests&logo=github&style=for-the-badge" alt="badge-tests">
<img src="https://img.shields.io/github/actions/workflow/status/pythonicboat/is-a.co/deploy.yml?branch=master&label=deploy&logo=github&style=for-the-badge" alt="badge-deploy">
<img src="https://img.shields.io/github/directory-file-count/pythonicboat/is-a.co/domains?label=domains&style=for-the-badge&type=file" alt="badge-domains">
</div>

Free subdomains for personal sites, open-source projects, and more. Here is a list of supported domain names:

|              Domain name              |                         Features                          |
|:-------------------------------------:|:---------------------------------------------------------:|
| ⚡ [`*.is-a.co`](https://is-a.co/) | ![cf][badge-cf] ![dnssec][badge-dnssec] ![ssl][badge-ssl] |

> Wildcards (like `*.foo.is-a.co`) are supported too

[badge-cf]:https://shields.io/badge/%20-cloudflare-blue?logo=cloudflare&style=plastic?cacheSeconds=3600
[badge-dnssec]:https://shields.io/badge/%20-DNSSEC-blue?logo=moleculer&logoColor=white&style=plastic?cacheSeconds=3600
[badge-ssl]:https://shields.io/badge/SSL-Required-blue?style=plastic?cacheSeconds=3600

## Why?

First of all, I want to answer one important question - "Why are you giving out domains for free?". Because sometimes I need domains for my pet projects, and instead of buying new domains every time, I decided to buy one for everyone, and use subdomains. And why not share them with the community?

## Domains settings

|                                   Option                                   |       `*.is-a.co`       |
|:--------------------------------------------------------------------------:|:-------------------------:|
|                              [DNSSEC][dnssec]                              |             ✅             |
|                                   Email                                    |             ❌             |
|                                 SSL/TLS *                                  |     [Full][ssl-full]      |
|                             Always Use HTTPS *                             |             ✅             |
|                   HTTP Strict Transport Security (HSTS)                    |             ✅             |
|                           Minimum TLS Version *                            |          TLS 1.2          |
|                    Opportunistic Encryption, TLS 1.3 *                     |             ✅             |
|                      WAF (Web Application Firewall) *                      | ✅ (Medium Security Level) |
|                         Browser Integrity Check *                          |             ✅             |
|            [Caching Level][caching-levels], Browser Cache TTL *            |     Auto, 4 hours          |
|                      [Crawler Hints][crawler-hints] *                      |             ✅             |
| [HTTP/2][http2], [HTTP/2 to Origin][http2-to-origin], HTTP/3 (with QUIC) * |             ✅             |
|                   [0-RTT Connection Resumption][0rtt] *                    |             ✅             |
|                         [gRPC][grpc], WebSockets *                         |             ✅             |
|                        [Pseudo IPv4][pseudo-ipv4] *                        |        Add header         |
|               IP Geolocation (HTTP header `CF-IPCountry`) *                |             ✅             |
|                           Maximum Upload Size *                            |          100 MB           |

> `*` Available only when proxying (`"proxy": true`) is enabled

[dnssec]:https://developers.cloudflare.com/dns/additional-options/dnssec
[ssl-full]:https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/
[ssl-flex]:https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/flexible/
[caching-levels]:https://developers.cloudflare.com/cache/how-to/set-caching-levels
[crawler-hints]:https://blog.cloudflare.com/crawler-hints-how-cloudflare-is-reducing-the-environmental-impact-of-web-searches/
[http2]:https://www.cloudflare.com/website-optimization/http2/what-is-http2/
[http2-to-origin]:https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin
[0rtt]:https://developers.cloudflare.com/fundamentals/network/0-rtt-connection-resumption/
[grpc]:https://support.cloudflare.com/hc/en-us/articles/360050483011
[pseudo-ipv4]:https://support.cloudflare.com/hc/en-us/articles/229666767

# How to get one?

1. Star and [fork](https://github.com/pythonicboat/is-a.co/fork) this repository
2. Go to [Webstite](https://is-a.co)
3. 

> Domains, used for illegal purposes will be removed and permanently banned.

## If you don't know...

- What is GitHub pages and how to set up a custom domain, read the [docs here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- The difference between `A`, `CNAME`, and other record types, the article on Wikipedia [is here](https://en.wikipedia.org/wiki/List_of_DNS_record_types)

[actions]:https://github.com/pythonicboat/is-a.co/actions
[deploy]:https://github.com/pythonicboat/is-a.co/actions/workflows/deploy.yml
<div align="center">
<a href="https://hits.sh/is-a.co/"><img alt="Hits" src="https://hits.sh/is-a.co.svg?label=Visitors&color=555555&labelColor=44cc11"/></a>
</div>
