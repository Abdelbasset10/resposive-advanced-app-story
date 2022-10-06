const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const {signUp, signIn} = require('../controllers/auth')

router.post('/sign-up',signUp)
router.post('/sign-in',signIn)

module.exports = router
