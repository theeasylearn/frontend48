//this example demonstrate how to fetch data from list using queryString(input parameter)

//to get all bus routes 
// http://localhost:5000/

//to get bus routes for given source & destination 
//http://localhost:5000/?source=bhavnagar&destination=surat

//get bus routes for given source & destination & below given price
//http://localhost:5000/?source=bhavnagar&destination=surat&price=400

const http=require('http');
const url=require('url');
const data=require('./lib/bus');

const server=http.createServer(
    (req,res)=>{
        res.writeHead(200,{'content-type':'application/json'});

        let info=req.url;
        let parseobj=url.parse(info,true);
        let queryString=parseobj.query;
        
        let output=data;

        if(queryString.source!=undefined && queryString.destination!=undefined){
            data.filter(
            if(queryString.source==data.from && queryString.destination==data.to){
                output=
            }
            );
        }

        else if(queryString.source!=undefined && queryString.destination!=undefined && queryString.price<=parseInt(data.price)){
            data.filter();
        }

        res.write(JSON.stringify(output));
        
        res.end();
    }
);
const port=5000;
server.listen(
    port,()=>{
        console.log("port is listening....");
    }
);