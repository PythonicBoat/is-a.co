addSubDomain({
  description: 'Test for the subdomain',
  domain: 'is-a.co',
  subdomain: 'check',
  owner: {
    repo: 'https://github.com/pythonicboat/is-a.co',
    email: 'vs21yash@gmail.com',
  },
  record: {
    CNAME: 'pythonicboat.github.io',
  },
  proxy: false,
})
