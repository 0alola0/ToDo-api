import express from 'express'
import {TodoModel} from '../models/todos.js'
import mongoose from 'mongoose'

const router = express.Router()


router.post("/create", async (req, res)=>{
    const {description, parent} = req.body
    const newTask = new TodoModel({description: description, parent: parent})
    await newTask.save()
    res.json({message: "successfull upload"})
})
router.get("/:id", async (req, res)=>{
    const parent = req.params.id
    const tasks = await TodoModel.find({parent: parent})
    res.json(tasks)
})
router.delete("/filter", async (req, res)=>{
    const tasks = await TodoModel.deleteMany({checked: true})
    res.json({message:"deleted tasks that were done"})
})
router.put("/edit", async(req, res)=>{
    const {id, description} = req.body
    const updatedTask = await TodoModel.findByIdAndUpdate(id, { description: description })
    res.send(updatedTask)
})
router.put("/toggle/:id/:bool", async(req, res)=>{
    const id = req.params.id
    const bool = req.params.bool
    const updatedTask = await TodoModel.findByIdAndUpdate(id, { checked: bool })
    res.send(updatedTask)
})
router.delete("/delete/:id", async(req, res)=>{
    const id = req.params.id
    const deletedTask = await TodoModel.findOneAndDelete({_id: id})
    res.send({message:"successfully deleted", deletedTask})
})
export {router as todoRouter}