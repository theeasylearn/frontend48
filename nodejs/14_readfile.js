const http=require('http');

const fs=require('fs');

const server=http.createServer(

    (req,res)=>{

        let url=req.url;
        
        let filename='site/404.html';

        if(url=='/'||url=='/home'){
            filename='site/home.html';
        }
        else if(url=='/aboutus'){
            filename='site/aboutus.html';
        }
        else if(url=='/contactus'){
            filename='site/contactus.html';
        }
        else if(url=='/products'){
            filename='site/products.html';
        }
        else if(url=='/services'){
            filename='site/services.html';
        }

        fs.readFile(filename,(error,content)=>{
            
                res.writeHead(200,{'content-type':'text/html'});
                res.write(content);
                res.end();
            
        });    
    }
 );

port=5000;
server.listen(port,()=>{
    console.log("server is running on port 5000...");
});