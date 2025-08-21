import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        // trim: true
    },
    courseCode: {
        type: String,
        required: true,
    },
    credits: {
        type: Number,
        required: true,
    }
});

export const Course = mongoose.model("Course", courseSchema);