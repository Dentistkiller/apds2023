const express = require('express')
const cors = require('cors')
const app = express()
const urlprefix ='/api'
const mongoose = require('mongoose')

const jwt = require('jsonwebtoken');
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
    server: {sslCA: cert }};
const connstring = 'mongodb+srv://yusparuk:2JYyxfn72vYCV2K1@cluster00.dcd4dot.mongodb.net/?retryWrites=true&w=majority'
//D44OgKXpVHxcXZxj

const carRoutes = require('./routes/car');
const userRoutes = require('./routes/user');

mongoose.connect(connstring)
.then(()=>
{
    console.log('Connected :-)')
})
.catch(()=>
{
    console.log('NOT connected :-(')
},options);


app.use(express.json())

app.use((reg,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
})

//https://expressjs.com/en/api.html#express.json
app.get(urlprefix+'/', (req,res)=> {
    res.send('Hello World')
})
app.use(cors());
app.use(urlprefix+'/cars',carRoutes)
app.use(urlprefix+'/users',userRoutes)


module.exports = app;