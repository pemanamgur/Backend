// import  express from 'express'
require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
 res.send("Im pema namgur tamang");
})

app.get('/pema',(req,res)=>{
    res.send("Welcome to pema namgur page");
})

app.get('/login',(req,res)=>{
    res.send('<h1>Pleas login in pema and code</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})