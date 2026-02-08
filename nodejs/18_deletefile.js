const http=require('http');
const fs=require('fs');
const url=require('url');
const { error } = require('console');

const server=http.createServer(
    (req,res)=>{

        let address=url.parse(req.url,true);
        let queryString=address.query;
        let path=address.pathname;
        let filename='mango.txt';
        
        if(path=='/delete_file'){

            fs.unlink(filename,(error)=>{
                if(error==null){
                    console.log("your file is deleted now");
                }
                else{
                    console.log("There is some error");
                }
            });

        }
        if(path=='/rename_file'){
            fs.rename('pineapple.txt','apple.txt',(error)=>{
                if(error==null){
                    console.log('your file is renamed now');
                }
                else{
                    console.log('There is an error');
                }
            });
        }
        const content="Your file name is gonna change";
        res.writeHead(200,{'content-type':'text/html'});
        res.write(content);
        res.end();
    }
);

const port=5000;
server.listen(port,()=>{
    console.log("server is giving response on port 5000");
});