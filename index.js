import express from 'express'
import userRoutes from "./router/user.js"
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

var dbURL="mongodb+srv://purva123:Purva123@cluster0.3eyfg.mongodb.net/tutorial?retryWrites=true&w=majority"
mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology:true})
        .then((result)=>{
            //any line of code 
            console.log("Successfully connected to DB")
            server.listen(8080, ()=>{console.log("Backend Server started")})
            // console.log(result)
        })
        .catch((err)=>{

            console.log("Error occured while connecting to Mongo DB")
        })




function myFunc(request, response){
    console.log("____________________myFunc function get called_____")
    console.log(request)
    response.send("Hello Rahul")
}
var server=express()
server.use(bodyParser.json())
server.use("/user", userRoutes)

server.get("/",myFunc)
