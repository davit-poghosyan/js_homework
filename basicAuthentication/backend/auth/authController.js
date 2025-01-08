const jwtVerifyMiddleWare = require("../middleware/jwtMiddleware.js")
const path = require("node:path");
const fs = require("node:fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { Router } = require("express");
require("dotenv").config()
const secretKey = process.env.JWT_SECRET 
console.log(secretKey)


const routerLogin = Router()
const routerSecurePage = Router()

const userLogin = async (user) => {
    const pathToUsersJson = path.join(__dirname, "../data/users.json")
    const validatedUsers = fs.readFileSync(pathToUsersJson, 'utf-8')
    const ParsedAccounts = validatedUsers.length !== 0 ? JSON.parse(validatedUsers) : []
    
    if (await usernamePasswordValidation(ParsedAccounts, user)) {
        console.log("okk")
        return true
    } else {
        console.log("noo")
        return false 
    }
}

const usernamePasswordValidation = async (validatedUsers, LogedInUser) => {
    const user = validatedUsers.find((u) => u.username === LogedInUser.username)
    if (!user) {
        console.log("User not found")
        return false
    }

    try {
        const result = await bcrypt.compare(LogedInUser.password, user.password)
        if (result) {
            console.log("Password matches:", result)
            return true
        } else {
            console.log("Password does not match.")
            return false
        }
    } catch (err) {
        console.log("An error occurred:", err)
        return false
    }
}

const logInfoStoring = (info) => {
    const pathToLogsJson = path.join(__dirname, "../data/logs.json")
    fs.appendFileSync(pathToLogsJson, JSON.stringify(info) + '\n', 'utf8')
}

routerLogin.post('/', async (req, res) => {
    const { username, password } = req.body
    const isValid = await userLogin({ username, password })
    if (isValid) {
        const token = jwt.sign({username}, secretKey, {expiresIn : "30s"})
        console.log(token)
        logInfoStoring({username:username, action : "login"})
        return res.status(200).json({message : token})
    } else {
        return res.status(401).send("Invalid username or password")
    }
})

routerSecurePage.get('/', jwtVerifyMiddleWare, (req, res) => {
res.send("securePage")
})

module.exports = {
    routerLogin : routerLogin,
    routerSecurePage : routerSecurePage
}