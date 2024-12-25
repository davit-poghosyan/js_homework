const express = require("express")
const bodyParser = require("body-parser")
const app = express()

let users = []
let products = []
let orders = []
app.use(express.json())

function isMailUnique(arr, mail) {
    return arr.some(obj => obj.email == mail)
}

function isObjectInUsers(array, obj) {
    return array.some(item =>
      Object.keys(obj).every(key => obj[key] === item[key])
    );
  }
  

app.post("/users/register", (req, res) => {
    let {username, email, password, is_admin} = req.body
    console.log(username, email, password, is_admin )
    if (username.length < 3) {
        res.status(400)
        res.send("username is too short")
    }else if (isMailUnique(users, email)) {
        res.status(400)
        res.send("email is already registed")
    } else if (password <6) {
        res.status(400)
        res.send("password is too short")
    } else {
        users.push(req.body)
        res.status("200")
        let tmp = req.body
        delete tmp.password
         res.send(tmp)
    }
    console.log(users)
})

app.post("/users/login", (req, res) => {
    let {username, email, password, is_admin} = req.body
    if (isObjectInUsers(users, req.body)) {
        res.status(200)
        res.send("you are logged in")

    } else {
        res.status(400)
        res.send("input data(s) are wrong")
    }
})



app.post("/products", (req, res) => {
    let {name, price} = req.body
    if (name.length > 1 && price > 0) {
        products.push(req.body)
        res.status(200)
        res.send("you products was added")
    } else {
        res.status(400)
        res.send("something is wrong with your product")
    }   
    
})

app.get("/products", (req, res) => {
    res.send(products)
})

app.post("/orders", (req, res) => {
    let {products, total_price} = req.body

    if (total_price > 0) {
        orders.push(req.body)
        req.status(200)
        req.send(req.body)
    } else  {
        req.status(400)
        req.send("something is wrong with your order")
    }
})

app.get("/orders", (req, res) => {
    req.status(200)
    req.send(orders)
})

app.listen(3001)

process.env