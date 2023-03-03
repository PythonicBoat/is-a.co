## Here is a sample file 
⚠️ Do remove the '<>' in the value fields
```js
addSubDomain({
  description: '',
  domain: 'is-a.co',
  subdomain: '<name>',
  owner: {
    repo: 'https://github.com/<username>/<link/to/repo>',
    email: '<your@email>',
  },
  record: {
    CNAME: '<record>',
  },
  nested: [
    {
      subdomain: '<name>',
      record: {
        CNAME: '<record>',
      },
    },
    {
      subdomain: '<name2>',
      record: {
        CNAME: '<record>',
      },
    },
  ],
})
```
