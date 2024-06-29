import express from "express";
import cors from "cors"
import {pool} from "./db.js";



const app=express()

//middleware
app.use(cors());
app.use(express.json())




app.listen(3000,()=>{
    console.log(`Server is working on the port 3000`)
})