const connection=require('./connect');
const express=require('express');
const app=express();


app.get(
    '/contact',function insert(req,res){

    let email=req.body.email;
    let name=req.body.name;
    let mobile=req.body.mobile;
    let detail=req.body.detail;

    if(email===undefined || name===undefined||mobile===undefined||detail===undefined){
        res.send("Data is incomplete");
    }

    let sql=`insert into contact(Email,Name,Mobile,Detail) values(${email},${name},${mobile},${detail})`;
    connection.conn.query(sql,(error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("contact inserted");
        }
    });
}

);

app.listen(5000);