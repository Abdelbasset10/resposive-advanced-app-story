require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const connectDB = require('./db/connectDb')
const authRouter = require('./routes/auth')
const postsRouter = require('./routes/posts')

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts',postsRouter)
app.use('/auth',authRouter)



const start = async () => {
    await connectDB(process.env.MONGO_URL)
    try {
        app.listen(5000,()=> console.log(`The server is starting on Port 5000...`))
    } catch (error) {
        console.log(error)
    }
}

start()