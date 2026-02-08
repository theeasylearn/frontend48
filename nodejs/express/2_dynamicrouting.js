const express=require('express');

const app=express();

app.get('/addition/:num1/:num2',(req,res)=>{

    let num1=parseInt(req.params.num1);
    let num2=parseInt(req.params.num2);
    let addition=num1+num2;
    res.send("Addition:"+addition);
});

app.get('/subtraction/:num1/:num2',(req,res)=>{

    let num1=parseInt(req.params.num1);
    let num2=parseInt(req.params.num2);
    let subtraction=num1-num2;
    res.send("Subtraction:"+subtraction);
});

app.get('/multiplication/:num1/:num2',(req,res)=>{

    let num1=parseInt(req.params.num1);
    let num2=parseInt(req.params.num2);
    let mulitplication=num1*num2;
    res.send("Multiplication:"+mulitplication);
});

app.get('/division/:num1/:num2',(req,res)=>{

    let num1=parseInt(req.params.num1);
    let num2=parseInt(req.params.num2);
    let division=num1/num2;
    res.send("Division:"+division);
});

app.listen(5000,()=>{
    console.log("Server is giving response");
});