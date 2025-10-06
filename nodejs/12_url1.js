const url=require('url');

const address='https://username:password@www.example.com:8080/path/name?query=123#hash';

//parse the web address
let parseobj=url.parse(address,true);//true for return object form

//returns whole object
console.log(parseobj);

console.log(parseobj.href);
console.log(parseobj.host);
console.log(parseobj.hostname);
console.log(parseobj.path);
console.log(parseobj.pathname);
console.log(parseobj.port);
console.log(parseobj.auth);
console.log(parseobj.protocol);
console.log(parseobj.search);