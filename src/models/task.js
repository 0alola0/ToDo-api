import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema ({
    description: {
        type: String,
        required: true,
    },
    checked:{
        type: Boolean,
        default: false
    },
    parent:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    }  
}, {timestamps: true})

export const TaskModel = mongoose.model("tasks", TaskSchema)
