const express = require ('express');
const path = require ('path');
const app = express();
const port = 3000


app.get('/',(req,res)=> {
    res.send('Hello World!')
});
app.get('/about',(req,res)=> {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/contactUS',(req,res)=>{
    res.sendFile(path.join(__dirname,'contactUs.html'))
});

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
});

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'))
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'))
});

app.get('/home',(req,res)=>{
    res. send("Hello")
});

app.listen(port,() => {
    console.log('Example app listening at http://localhost:${port}')
});