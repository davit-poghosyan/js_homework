const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.json())

const middleWare = (req, res, next) => {
    console.log(req.method)
    console.log(req.originalUrl)
    console.log(new Date())
    next()
}



app.use(middleWare)

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3000)