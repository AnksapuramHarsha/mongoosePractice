// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/user', (req, res) => {
//     res.send('Hello user!')
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const mongoose=require("mongoose")
const user=require("./user")
mongoose.connect("mongodb://localhost:27017");
// const user1=new user({name:"harsha", age:24})
// const user2=new user({name:"pk",age:25})
// user1.save().then(()=>console.log("user1 data is saved"))
// user2.save().then(()=>console.log("user2 data is saved"))

// async function userDetails(){
//     const user3=await new user({name:"ram",age:25})
//     user3.name="harsha"//update name
//     await user3.save()
//     console.log(user3);
// }
userDetails()
// async function userDetails(){
    
//     try{
//         const user4=new user({
//             name:"harsha",
//             age:24,
//             phno:9912764925,
//             email:"harsh@getMaxListeners.com",
//             hobbies:["cricket","volleyball"],
//             address:{
//                 Street: "colony",
//                 pincode: 50224
//             }
//         })
//         await user4.save();
//         console.log(user4);
//     }
    
//     catch(e){
//         console.log(e.message);
//     }
// }
async function userDetails(){
    try{

        const userId=await user.findById("65cb0a33f269780928bde569");
        // user.find({name:"harsha"})--user.exists,user.deleteOne-deletes 1st one;
        // queries
        // const randomUserser=await user.where("name").equals("harsha");
        //                           user.where("age").gt("12")//gt- greater than
        //                           await user.where("name").equals("harsha").where("age").gt("12")

        await userId.save();
        console.log(userId);
    } catch(e){
        console.log(e.message);//invalid userid
    }
}
