import express from 'express'
const app=express()
import cors from 'cors'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import cookieparser from 'cookie-parser'
app.use(express.json())
app.use(cookieparser())
app.use(cors());
app.use(express.urlencoded({extended:true}));

let schema1=new mongoose.Schema({
    username:{
        type:String,
       required:true
    },
    email:{
        type:String,
        unique:true
     
    },
  
    message:{
      type:String,
      required:true
    },
    mobile:{
      type:Number,
      required:true
    }
})
let Contact=new mongoose.model("contact",schema1)

let schema2=new mongoose.Schema({
  username:{
      type:String,
     required:true
  },
  email:{
      type:String,
      unique:true,
      required:true
   
  },
  password:{
      type:String,
      required:true
     
     
    
  }
  }
)
let login=new mongoose.model("login",schema2)
mongoose.connect("mongodb://localhost:27017/divyansh")
    .then(() => { console.log("Connected to MongoDB successfully"); })
    .catch(err => { console.log(err);alert("Please enter valid credentials") });
app.post('/login',async(req,res)=>
{
  let {username,password}=req.body
  try{
    let user = await login.findOne({ username });
if (!user) {
    return res.status(400).json("User not found");
}
    let check=await bcrypt.compare(password,user.password)
    
    if(check)
    {
        res.json("success")
    }
    else{
          res.json("something went wrong")
    }
  }
  catch(error)
  {
    console.log(error)
  }
})
app.post("/signup",async(req,res)=>
{
  let{username,email,password}=req.body
  try{
    let exist=await login.findOne({username})
    let salt=await bcrypt.genSalt(10)
    let hashpassword=await bcrypt.hash(password,salt)
    if(!exist)
    {
         let result=await login.create({
            username,email,password:hashpassword
         })

         let token=jwt.sign({'email':email},"secret",{expiresIn:'1h'});
         res.cookie('token',token)

        console.log(result);
        res.json(("success"));
    }
  }
  catch(error)
  {
    console.log(error)
  }
})
app.post("/contact",async(req,res)=>
{
  let {username,email,mobile,message}=req.body
  try{
    let result2= await  Contact.create({
      username,email,mobile,message
    })
    console.log(result2)
    res.json("success")
  }
 catch(error)
 {
  console.log(error)
  res.json("error")
 }
})
let schema3=mongoose.Schema({
  username:{type:String,require:true},
  mobile:{type:Number,require:true},
  email:{type:String,require:true},
  address:{type:String,require:true},
  address2:{type:String,require:true},
  city:{type:String,require:true},
  state:{type:String,require:true},
  country:{type:String,require:true},
  message:{type:String,require:true},
  total:{type:Number,require:true},
  cart2:{type:Array,require:true},
  data:{type:Array,require:true}
})
let order=mongoose.model("order",schema3)
//laceorder//
app.post("/placeorder",async(req,res)=>
  {
    let {data,total,cart2}=req.body
    try{
      let result2= await  order.create({
       data,total,cart2
      })
      console.log(result2)
      res.json("success")
    }
   catch(error)
   {
    console.log(error)
    res.json("error")
   }
  })
app.listen(3000,()=>
{
    console.log("server started")
})