// An object or string that defines:
// • encoding (default: 'utf8')
// • mode (default: 0o666)
// • flag (default: 'w' → write mode)

const http=require('http');

const url=require('url');

const fs=require('fs');

const server=http.createServer(
    (req,res)=>{
    
        let queryString=url.parse(req.url,true);
        //console.log(queryString);
        let info=queryString.query;
        let path=queryString.pathname;
        let filename='mystory.txt';
        let content="story submitted successfully";

        if(path=='/submit_story'){
            let filedata="Name: "+info.name+"\nEmail: "+info.email+"\nMobile: "+info.mobile+"\nStory: "+info.story;
        fs.writeFile(filename,filedata,(error)=>{
            if(error){ 
                console.log("There is an error");
            }
            else{
                content;
            }
            
        });
        res.writeHead(200,{'content-type':'text/html'});
        res.write(content);
        res.end();
        }
        
    }
 );

port=5000;
server.listen(port,()=>{
    console.log("server is running on port 5000...");
});