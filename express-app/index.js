const express=require('express');

const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    res.json({
        succuss:true,
        data:"welcome to express server"

    });
});

app.post('/home',(req,res)=>{
    res.send("welcome to express server, post req got fullfilled succussfully");
})




app.listen(PORT,()=>{
    console.log("express app started at port: ",PORT );
})