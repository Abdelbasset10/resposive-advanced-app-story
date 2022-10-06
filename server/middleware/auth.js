const jwt = require('jsonwebtoken')

const auth = async (req,res,next) => {
    try {
        const token = req.headers.authorization;
        if(token){
            const validToken = token.split(" ")[1]
            const decode = jwt.verify(validToken,'SECRET')
            req.userId = decode?.id
        }else{
            console.log('NO token')
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = auth