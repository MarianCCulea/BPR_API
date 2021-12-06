const mongoose= require('mongoose');

const express=require('express');
const rootRouter = require('./routes/index');

const dotenv=require('dotenv');
dotenv.config();

const app=express();
app.use(express.json());
app.use(rootRouter);

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));

module.exports=app;