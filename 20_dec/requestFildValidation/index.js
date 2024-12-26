const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.json())

const emailRegex = 

/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


function isEmailValid(email) {
    // Check if the email is defined and not too long
    if (!email || email.length > 254) return false;

    // Use a single regex check for the standard email parts
    if (!emailRegex.test(email)) return false;

    // Split once and perform length checks on the parts
    const parts = email.split("@");
    if (parts[0].length > 64) return false;

    // Perform length checks on domain parts
    const domainParts = parts[1].split(".");
    if (domainParts.some(part => part.length > 63)) return false;

    // If all checks pass, the email is valid
    return true;
}

const middleWare = (req, res, next) => {
    const {username, email, password} = req.body
    const errors = []

    if (username.length < 3) {
        errors.push("the length of username is less than 3")
        
    }
    if (!isEmailValid(email)) {
        errors.push("email is not valid")
    }
    if (password.length < 6) {
        errors.push("the length of password is less than 6")

    }
    if (errors.length > 0) {
        return res.status(400).json({errors})
    }
    next();
}

app.post('/users', middleWare, (req, res) => {
    const {username, email, password} = req.body
    res.status(201).json({ message: "User created successfully", username, email })
})

app.listen(3000)