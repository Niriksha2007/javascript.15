const express = require("express");
const {userModel} = require("../model/user.model")

const userRouter = express.Router();
app.use()


userRouter.post("/register", async(req,res)=> {
    const{name,email,password} = req.body;

    const newUser = new userModel({name,email,password});
    await newUser.save()
    res.send({msg:"New user crated successfully"});
});

userRouter.post("/login",(req,res)=> {
    res.send({msg:"Login successfully"});
});

module.exports = {userRouter};