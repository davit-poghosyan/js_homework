const http = require("node:http")
const path = require("node:path")
const fs = require("node:fs")

function readFileContent(fileName) {
    return new Promise((resolve, reject) => {
        let filePath = path.join(__dirname, fileName)
            fs.readFile(filePath, "utf-8", (err, data) => {
                if (err) {
                    console.log("eroor")
                    reject(err)
                } else {
                    console.log("okkk")
                    resolve(data)
                }
            })
        })
        
}

function appendToFile(fileName, buffer) {
    return new Promise((resolve, reject) => {
        let filePath = path.join(__dirname, fileName)
        if (buffer)
        fs.appendFile(fileName, buffer, (err) => {
            reject(err)
        })
        resolve()
    })
}

function jsonValidation(src) {
    if(src["name"] != undefined && src["age"] != undefined) 
        return true

    return false
}


appendToFile("users.json", JSON.stringify({name: "ashot"}))
.then((val) => {
    console.log("ok")
})
.catch((err) => {
    console.log("errrr")
})



const server = http.createServer((req, res) => {
    console.log("server create", req.url)
    if (req.url === "/users") {
        res.setHeader("Content-type", "application/json")
        if (req.method === "GET") {
            readFileContent("users.json").
            then((data) => {
                res.write(data)
            })
            .catch((err) => {
                res.write("[]")
            })
            .finally(() => {
                res.end()
            })
        } else if (req.method === "POST") {
            let data = ""
            req.on("data", (chunk) => {
                data += chunk;
              });
            req.on("end", () => {
                appendToFile("users.json", data)
                res.setHeader("Content-Type", "application/json");
                console.log(data)
            })
            res.end("post completed")
        }
    } else {
        
    }
})

server.listen(3002)

