require("dotenv").config()
const jwt = require("jsonwebtoken")

const secretKey = process.env.JWT_SECRET

const jwtVerifyMiddleware = (req, res, next) => {
    try {
        const header = req.headers["authorization"]
        const token = header.split(" ")[1]

        const data = jwt.verify(token, secretKey)

        const currentTime = Math.floor(Date.now() / 1000)
        if (data.exp && currentTime > data.exp) {
            return res.status(401).json({ error: "Token has expired" })
        }

        console.log("Token is valid")
        next()
    } catch (error) {
        console.error("JWT verification failed:", error.message)
        return res.status(401).json({ error: "Invalid token" })
    }
}

module.exports = jwtVerifyMiddleware
