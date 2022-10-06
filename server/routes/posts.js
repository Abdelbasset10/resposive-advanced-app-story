const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const {getAllPosts, getPostBySeatch, createPost, updatePost, deletePost, likeDislikePost} = require('../controllers/posts')

router.get('/',getAllPosts)
router.get('/search',getPostBySeatch)
router.post('/',auth,createPost)
router.patch('/:id',auth,updatePost)
router.delete('/:id',auth,deletePost)
router.patch('/:id/likeDislike',auth,likeDislikePost)

module.exports = router