//json:javascript object notation

const http=require('http');

var center = {

    name: 'the easy learn',
    mobile: 1234567890,
    email: 'theeasylearn@gmail.com',
    lang: 'nodejs'
}

var mobile = {
    name: 'product1',
    price: 12000,
    details: [34.4, 'black', 'lightweight']
}

var laptop = {
    name: 'product2',
    price: 12000,
    details: [34.4, 'red', 'lightweight']
}

var headphone = {
    name: 'product3',
    price: 12000,
    details: [34.4, 'green', 'lightweight']
}


const server=http.createServer(
    (req,res)=>{

        res.writeHead(200,{'content-Type':'application/json'});

        let url=req.url;

        let output=JSON.stringify(center);

        if (url=='/'){
            output=JSON.stringify(center);
        }

        else if(url=='/mobile'){
            output=JSON.stringify(mobile);
        }

        else if(url=='/laptop'){
            output=JSON.stringify(laptop);
        }

        else if (url=='/headphone'){
            output=JSON.stringify(headphone);
        }
        
        res.write(output);
        res.end();
    }
);

let port=5000;

server.listen(port,
    ()=>{
        console.log("port 5000 is listening....");
    }
);