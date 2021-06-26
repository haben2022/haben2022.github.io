
const dns = require('dns');
const mim= dns.lookup('www.mim.edu',(err,adresses, family)=>(console.log(adresses)));