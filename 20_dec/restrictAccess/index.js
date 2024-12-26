const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.json())

const middleWare = (req, res, next) => {
    const is_admin = req.body.is_admin
    if (req.method === 'POST' && req.url === '/products' && is_admin == false) {
        return res.status(400).json({ error: "Forbidden: Admin access required." });
    }
    next()
} 

app.use(middleWare)

app.post("/products", (req, res) => {
    res.send({message : "hello"})
})

app.listen(3000)


