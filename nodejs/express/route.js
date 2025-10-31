const express=require('express');

const app=express();

app.get('/product',(req,res)=>{
    res.send("Get method is called");
});

app.post('/product',(req,res)=>{
    res.send("Post method is called");
});

app.put('/product',(req,res)=>{
    res.send("Put method is called");
});

app.delete('/product',(req,res)=>{
    res.send("Delete method is called");
});

app.listen(5000,()=>{
    console.log("Server is giving response");
});