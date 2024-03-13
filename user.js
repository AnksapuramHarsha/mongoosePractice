const mongoose=require("mongoose")
const addressSchema=new mongoose.Schema({
    Street:String,
    pincode:Number
})

const userSchema= new mongoose.Schema({
    name:String,
    age: Number,
    phno: Number,
    email: {
        type:String,
        minLength:5,
        required:true
    },
    hobbies:[String],
    address: addressSchema,
    date:{
        type:Date,
        default:()=>Date.now(),
    }
})

module.exports=mongoose.model("user",userSchema)