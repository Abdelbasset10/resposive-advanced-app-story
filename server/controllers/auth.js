const UserModel = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUp = async (req,res) => {
    try {
        const {firstName,lastName,email,password,confirmPassword} = req.body
        if(!firstName || !lastName || !email || !password || !confirmPassword){
            return res.json({message:"You have to fill all your informations"})
        }
        const existUser = await UserModel.findOne({email})
        if(existUser){
            return res.json({message:"This user is already in , change the email please"})
        }
        if(password !== confirmPassword){
            return res.json({message:"The passwords are incorrect"})
        }
        const hashPassword = await bcrypt.hash(password,12)
        const user = await UserModel.create({email, password: hashPassword, name: `${firstName} ${lastName}`})
        const token = jwt.sign({email:user.email,id:user._id},'SECRET',{expiresIn:'30d'})
        res.status(201).json({user,token})
        
    } catch (error) {
        console.log(error)
    }
}

const signIn= async (req,res) => {
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.json({message:"You have to fill all your informations"})
        }
        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(404).json({message:'This user does not exist . please sign up...'})
        }
        const isValidPassword = await bcrypt.compare(password,user.password)
        if(!isValidPassword){
            return res.status(404).json({message:"The password is incorrect"})
        }
        const token = jwt.sign({email:user.email,id:user._id},'SECRET',{expiresIn:'30d'})
        res.status(200).json({user:user,token})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {signUp, signIn}