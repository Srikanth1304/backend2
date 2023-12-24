import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String , //cloudinary
        requried:true
    },
    coverimg:{
        type:String
    },
    history:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],
    password:{
        type:String,
        requried:[true,'password requried']

    },
    refreshToken:{
        type:String
    }

},{timestamps:true})

userSchema.pre('save',async function(next){
    if (!this.isModified('password')) return next()
    this.password=bcrypt.hash(this.password,10)
    next();
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(this.password,password)
}

userSchema.methods.genarateAcessToken= async function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName,
        fullName:this.fullName,
    })
    process.env.ACESS_TOKEN_SECRET,
    {
        expireIn: process.env.ACESS_TOKEN_EXPIRY
    }
}
userSchema.methods.genarateRefreshToken= async function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName,
        fullName:this.fullName,
    })
    process.env.REFRESH_TOKEN_SECRET,
    {
        expireIn: process.env.REFRESH_TOKEN_EXPIRY
    }
}
export const User=mongoose.model('User',userSchema);
