const express = require("express")


const app = express()

app.use(express.json())

const middleWar = (req, res, next) => {
    if (req.method === "POST" || req.method === "PUT") {
        for(let key in req.body) {
            if (typeof req.body[key] === "string") {
                console.log(req.body[key]);
                req.body[key] = req.body[key].trim(); // Only call trim() once
                console.log(req.body[key]);
                if (key === "email") {
                    req.body[key] = req.body[key].toLowerCase()
                } 
            }
        }
    }
    next()
}

app.use(middleWar)

app.post("/", (req, res) => {
    res.send({message: "response message"})
})

app.listen(3001)