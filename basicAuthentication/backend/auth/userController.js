
const { Router } = require("express")
const bcrypt = require("bcrypt")
const fs = require("node:fs")
const path = require("node:path")
const routerRegistration = Router()

const passwordHashing =  (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

const userStoring = (user) => {
    const pathToUsersJson = path.join(__dirname, "../data/users.json")
    const validatedUsers = fs.readFileSync(pathToUsersJson, 'utf-8');

    if(validatedUsers.length !== 0){
        var ParsedAccounts = JSON.parse(validatedUsers);
    }
    else{
        ParsedAccounts = [];
    }
    if (userValidation(ParsedAccounts, user.username)) {
        ParsedAccounts.push(user);
        const NewData = JSON.stringify  (ParsedAccounts, null, 4);
        fs.writeFileSync(pathToUsersJson, NewData);
        return true;
    }
    return false
}

const userValidation = (validatedUsers, username) => {
    if (validatedUsers.find((user) => user.username === username)) {
        console.log("user is registered")
        return false
    }
    console.log("user is will be pushed in the database")
    return true
}


routerRegistration.post("/", (req, res) => {
    const {username, password} = req.body
    if (!username || ! password) {
        res.status(400).send("username and password is required")
    }
    const hashedPasswd = passwordHashing(password); 
    if (userStoring({username, password : hashedPasswd})) {
        return res.status(200).send("user added")
    }
    return res.send("user is already registered")
})

module.exports = routerRegistration
