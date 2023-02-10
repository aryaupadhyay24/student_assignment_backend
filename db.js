
const mongoose=require('mongoose')
const mongoURI="mongodb+srv://arya:arya@cluster0.x946xbu.mongodb.net/sdetails?retryWrites=true&w=majority";
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("successfully connected");
    })
} 
module.exports=connectToMongo