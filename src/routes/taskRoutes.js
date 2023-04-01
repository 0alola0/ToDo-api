// import express from 'express'
// import {TaskModel} from '../models/task.js'
// import mongoose from 'mongoose'

// const router = express.Router()


// router.post("/create", async (req, res)=>{
//     const {description, parent} = req.body;
//     const newTask = new TaskModel({description: description, parent: parent})
//     await newTask.save()
//     res.json({message: "successfull upload"})
// })

// export {router as taskRouter}