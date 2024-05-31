const express=require('express');
const router=express.Router();
const Home=require('../models/home')
const multer=require('multer')
const fs=require('fs');
const { type } = require('os');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      const token = jwt.sign({ userId: user._id }, "your_secret_key", {
        expiresIn: "1h",
      });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  
// image upload

var storage=multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

var upload=multer({
    storage:storage,

}).single("image");

//Insert an home into data base rout
router.post('/add',upload,(req,res)=>{
        const home=new Home({
        locality:req.body.locality,
        bhkType:req.body.bhkType,
        rent:req.body.rent,
        isFurnished:req.body.isFurnished,
        address:req.body.address,
        image:req.file.filename,
    });
    
    try {
        home.save();  
        req.session.message={
            type:'success',
            message:'Home added successfully'
        };
        res.json(home);    
    } catch (err) {
        console.log(err);
        res.json({ message: err.message, type: 'danger' });
    }
    
});

//get all home homes
router.get('/', async (req,res)=>{
    
    try{
        let homes = await Home.find().exec();
        res.json(homes);
        
    }
    catch(err){
        res.json({message:err.message,type:'danger'}); 
    }
    
    
});
// router.get('/add',(req,res)=>{
//     res.render('add_homes',{title:'Add home'})
// })

//Edithome
router.get('/edit/:id',async (req,res)=>{
    let id=req.params.id;
    try{
        let home=await Home.findById(id);
        if(home==null){
            res.json({status:'home not found'});
        }
        else{
            res.json(home)
        }
    }
    catch(err){
        console.log(err+"during getting home by id")
        res.redirect('/');
    }
        
});

//update home route
router.post('/update/:id',upload,async (req,res)=>{
    console.log("function has been called")
    let id=req.params.id;
    let new_image='';
    if(req.file){
        new_image=req.file.filename;
        try{
            fs.unlinkSync("./uploads/"+req.body.old_image);
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        new_image=req.body.old_image;
    }
    try{
        await Home.findByIdAndUpdate(id,{
            locality:req.body.locality,
            bhkType:req.body.bhkType,
            rent:req.body.rent,
            isFurnished:req.body.isFurnished,
            address:req.body.address,
            image:new_image

        })
        //console.log(result);
        req.session.message={
            type:'success',
            message:'Home updated sucessfully!'
        }
        res.json(Home.findById(id));
    }
    catch (err){
        console.log(err);
        res.json({message:err.message,type:'danger'})
    }
    

});
//delete home route
router.get('/delete/:id',async(req,res)=>{
    let id=req.params.id;
    try{
        deleted_home=await Home.findByIdAndDelete(id);
        console.log(deleted_home._id+" has deleted")
        if (deleted_home.image!='') {
            try{
                fs.unlinkSync('./uploads/'+deleted_home.image);
            }
            catch(err){
                console.log(err);
            }
            
        } 
        req.session.message={
            type:'info', 
            message:'Home deleted sucessfully!'
        }
        res.redirect('/');
    }
    catch(err){
        res.json({meassage:err.message })
    }
    
})

//login sigmup

module.exports=router;