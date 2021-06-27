
//need to import mongoose for defining schema
import mongoose from 'mongoose'

//const schema is object and mongoose.schema is class
const Schema=mongoose.Schema

const userSchema = new Schema({     //inside model we will declare schema key value pair
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
},{timestamps:true})
//timestamps means whenever new reord is updated at/created at time will be updated that time this feature is by defaul availbl needs to enable it
export const User=mongoose.model("User",userSchema)
//now assinging schema to collection we use export to use this in any other file.to access the model we exported it.