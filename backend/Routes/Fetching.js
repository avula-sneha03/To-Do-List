const express = require('express')//creating a server named express
const router = express.Router()
const User=require("../models/User")
const { body, validationResult} = require('express-validator');


 router.post("/creatuser",[
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 })], async(req,res)=> {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email
    let fool=await User.findOne({email})
    //console.log(fool)
    if (fool!=null) {
        return res.status(400).json("Email Already Exist");
    }
    try{
        User.create({//user is model containing schema reelated to user
            name: req.body.name,
            email:req.body.email,
            contact:req.body.contact,
            password:req.body.password
        })
        res.json({success:true});
        
    } 

    catch(error){
        console.log(error)
        res.json({success:false});
        localStorage.setItem('isSignUp','false')
    }
})

router.post("/EditUserData",[
    body('email').isEmail(),
    body('name').isLength({ min: 5 })], async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email;
    try {
        await User.findOneAndUpdate({'email':email},
            { $set:{
                'name': req.body.name,
                'email':req.body.email,
                'contact':req.body.contact,
            } }).then(() => {
                res.json({ success: true })
            })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false })
    }

})

router.post("/loginuser",[
    body('email').isEmail(),
    body('password').isLength({ min: 5 })], async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email;
    try{
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors: "Enter a Valid email"})
        }
        if(req.body.password !== userData.password){
            return res.status(400).json({errors: "Enter a Valid password"})            
        }
        return res.json({success:true})
    }

    catch(error){
        console.log(error)
        res.json({success:false});
    }
})



module.exports = router;