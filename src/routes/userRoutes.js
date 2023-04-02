import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {UserModel} from '../models/users.js'
import mongoose from 'mongoose'
import dotenv from "dotenv";

dotenv.config()

const router = express.Router()

router.post("/register", async (req, res)=>{
    const {username, password} = req.body;

    const user = await UserModel.findOne({username: username})

    if(user){
        return res.json({message: "user already exists"}) 
    }

    const hashedPass = await bcrypt.hash(password, 10)
    await UserModel.create({username: username, password: hashedPass})
    res.json({message: "successfull registration"})
})

router.post("/login", async (req, res)=>{
    const {username, password} = req.body;

    const user = await UserModel.findOne({username: username})

    if(!user){
        return res.json({message: "no such user found"})
    }
    const pass = await bcrypt.compare(password, user.password)
    if(!pass){
        return res.json({message: "incorrect password"})
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
    res.json({token, userID: user._id})

















    // const {username, password} = req.body;

    // const user = await UserModel.findOne({userrname: username})
    // if(!user){
    //     return res.json({message: "user not found"}) 
    // }
    // const pass = await bcrypt.compare(password, user.password)
    // if(!pass){
    //     return res.json({message: "password incorrect"}) 
    // }

    // const token = jwt.sign({id:user._id}, "secretWord")
    // res.json({token, userID: user._id})
})



export {router as userRouter}