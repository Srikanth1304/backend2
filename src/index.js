//require('dotenv').config({path:'./env'})  for faster set of env variables
import dotenv from 'dotenv'
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`DB connect at ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log('DB Connection failed',err);
})

/*
const app=express();
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("Error",error)
        throw err
    }
    
})() */