const PostModel = require('../models/PostModel')

const getAllPosts = async (req,res) => {
    try {
        const allPosts = await PostModel.find({})
        res.status(200).json(allPosts)
    } catch (error) {
        console.log(error)
    }
}

const getPostBySeatch = async (req,res) =>{
    const {searchQuery} = req.query
    try {
        const title = new RegExp(searchQuery,"i"); // new york = New york = New York = NEWY TORK
        const posts = await PostModel.find({title:title})
        res.json(posts)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const createPost = async (req,res) => {
    try {
        const post = req.body
        const newPost = new PostModel({
            ...post , creator:req.userId
        })
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
    }
}

const updatePost = async (req,res) => {
    try {
        const {id} = req.params
        const getPostAndUpdate = await PostModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!getPostAndUpdate){
            return res.status(404).json({message:"The post does not exist"})
        }
        res.status(200).json(getPostAndUpdate)
    } catch (error) {
        console.log(error)
    }
}

const deletePost = async (req,res) => {
    try {
        const {id} = req.params
        const getPostAndDelete = await PostModel.findByIdAndDelete(id)
        if(!getPostAndDelete){
            return res.status(404).json({message:"The post does not exist"})
        }
        res.status(200).json({message:'the post has been deleted succefully'})
    } catch (error) {
        console.log(error)
    }
}

const likeDislikePost = async (req,res) => {
    try {
        const {id} = req.params
        const {userId} = req.body
        const post = await PostModel.findById(id)
        if(!post){
            return res.status(404).json({message:'No post'})
        }
        if(post.likeCount.includes(userId)){
            await post.updateOne({$pull : {likeCount:userId}})
            res.status(200).json({message:'The post has been disliked'})
        }else{
            await post.updateOne({$push : {likeCount:userId}})
            res.status(200).json({message:'The post has been liked'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllPosts, getPostBySeatch, createPost, updatePost, deletePost, likeDislikePost}