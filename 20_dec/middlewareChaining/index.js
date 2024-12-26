const express = require("express")


const app = express()

const users = [
    {user_id : 1, name : "James"},
    {user_id : 2, name : "Ashot"},
    {user_id : 3, name : "Narek"},
    {user_id : 4, name : "Aram"}

]

app.use(express.json())

const middleWare1 = (req, res, next) => {
    const user_id = req.body.user_id
    if (user_id === undefined) {
        return res.status(400).json({message: "user id is undefied"})
    }
    next()
}

const middleWare2 = (req, res, next) =>{
    const user_id = req.body.user_id

    for (let obj of users) {
        if (obj.user_id == user_id) {
            return res.status(200).json({message : "user id exists in data base"})
        }
    }
    next()
} 

app.post("/orders", middleWare1, middleWare2, (req, res) => {
    res.status(400).json({message : "user id does not exist in data base"})
})

app.listen(3000)