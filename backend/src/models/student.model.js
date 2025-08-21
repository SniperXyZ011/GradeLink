import mongoose from 'mongoose';

const fullNameSchema = {
    firstName : {
        type: String,
        required: true,
        trim: true
    },
    lastName : String
}
const studentSchema = new mongoose.Schema({
    fullName : fullNameSchema,
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
        minlength: 6,
        select: false 
    },
    age : Number,
    rollNo : {
        type: String,
        required: true,
        unique: true
    },
    branch : {
        type: String,
        required: true
    },
    section : String,
    phone : Number,
    semester : [
        {
            semesterNumber : {
                type: Number,
                required: true
            },
            courses : [{
                course : {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Course'
                },
                grade: {
                    type: String,
                    enum: ['A', 'B', 'C', 'D', 'E', 'F'],
                    default: 'F'
                },
            }]
        }
    ]
    
},{timestamps: true});

const Student = mongoose.model('Student', studentSchema);