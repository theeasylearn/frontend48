var http = require('http');
var requestCount = 0;
//to send request open browser and type localhost:5000 in address bar 

var server = http.createServer(function(request,response){
    //code in this method will run for each and every request received by server.
    requestCount++; //increase requestCount by 1 
    console.log(`I have received request ${requestCount} times`);
});

//start server
server.listen(5000);
console.log('server has started.....');