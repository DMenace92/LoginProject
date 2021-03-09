const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
//need to add validators
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        trim: true
    },
    last_name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique:true,
        required: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not Valid')
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password must not use Password')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a Positive number')
            }
        }
    },
    privliges:{
        type:String,
        retuired:true,
        default:"bronze"
    },
    tokens:[{
        token:{
            type:String,
            required: true
        }
    }],
    avatar:{
        type: Buffer
    }

},{
    timestamps:true,
})
userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()
    return userObject
}
userSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, '08101555')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.pre('save', async function (next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


const User = mongoose.model('User', userSchema)
module.exports = User