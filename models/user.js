import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        reqired : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        default : "user"
    },
    password : {
        type : String,
        required : true,
        default : "Not given"
    },
    phone : {
        type : String,
        required : true,
        default : "Not given"
    },
    isDisabled : {
        type : Boolean,
        required : true,
        default : false
    },
    isEmailVerified : {
        type : Boolean,
        required : true,
        default : false
    },
})
const User = mongoose.model("users",userSchema)
export default User;