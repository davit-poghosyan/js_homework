const express = require("express")
require("dotenv").config()
const cors = require('cors');
// app.use(cors());

const port = process.env.PORT || 3000
const app = express()
const routerRegistration = require("./auth/userController.js")
const routerLogin = require("./auth/authController.js")
const routerSecurePage = require("./auth/authController.js")
const routerAuthController = require("./auth/authController.js")
app.use(express.json())
app.use(cors());

app.use("/registeration", routerRegistration)
app.use("/login", routerAuthController.routerLogin)
app.use("/secure", routerAuthController.routerSecurePage)
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

