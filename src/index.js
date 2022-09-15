const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// // your code goes here
app.get("/",(req,res)=>{
    res.send("Hello pooja")
});


//add

app.post("/add",(req,res)=>{
    num1=req.body.num1;
    num2=req.body.num2;
    let sum=num1+num2;
    let response={}
    if(num1<-1000000 || num2<-1000000){
        response.status="error"
        response.message="Underflow"
    }
    else if(num1>1000000 || num2>1000000){
        response.status="error"
        response.message="Overflow"
    }
    else if(typeof(num1)===String || typeof(num2)===String){
        response.status="error"
        response.message="Invalid data types"
    }
    else{
        response.status="success"
        response.message="The sum of given two numbers"
        response.sum=sum;
    }
    res.send(response)
})

//substract

app.post("/sub ",(req,res)=>{
    num1=req.body.num1;
    num2=req.body.num2;
    let difference=num1-num2;
    let response={}
    if(num1<-1000000 || num2<-1000000){
        response.status="error"
        response.message="Underflow"
    }
    else if(num1>1000000 || num2>1000000){
        response.status="error"
        response.message="Overflow"
    }
    else if(typeof(num1)===String || typeof(num2)===String){
        response.status="error"
        response.message="Invalid data types"
    }
    else{
        response.status="success"
        response.message="The difference of given two numbers"
        response.difference=difference;
    }
    res.send(response)
})

//multiply

app.post("/multiply",(req,res)=>{
    num1=req.body.num1;
    num2=req.body.num2;
    let result=num1*num2;
    let response={}
    if(num1<-1000000 || num2<-1000000){
        response.status="error"
        response.message="Underflow"
    }
    else if(num1>1000000 || num2>1000000){
        response.status="error"
        response.message="Overflow"
    }
    else if(typeof(num1)===String || typeof(num2)===String){
        response.status="error"
        response.message="Invalid data types"
    }
    else{
        response.status="success"
        response.message="The product of given numbers"
        response.result=result;
    }
    res.send(response)
})

//divide 

app.post("/divide",(req,res)=>{
    num1=req.body.num1;
    num2=req.body.num2;
    console.log(typeof(num1),typeof(num2))
    let result=num1/num2;
    let response={}
    if(num2===0){
        response.status="error"
        response.message="Cannot divide by zero"
    }
    else if(num1<-1000000 || num2<-1000000){
        response.status="error"
        response.message="Underflow"
    }
    else if(num1>1000000 || num2>1000000){
        response.status="error"
        response.message="Overflow"
    }
    else if(typeof(num1)==="string" || typeof(num2)==="string"){
        response.status="error"
        response.message="Invalid data types"
    }
    else{
        response.status="success"
        response.message="The division of given numbers"
        response.result=result;
    }
    res.send(response)
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;