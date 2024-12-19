const http = require("node:http")
const path = require("node:path")
const fs = require("node:fs")
const { create } = require("node:domain")

function dataFromFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, filename), "utf-8", (error, data) => {
            if (error) {
                return reject(error)
            }
            else {
                return resolve(data)
            }
        })
    })
}

const server = http.createServer((req, res) => {
    if (req.url = "/" && req.method == "GET") {
        res.setHeader("Content-Type", "text/html")
        dataFromFile("index.html")
        .then((data) => {
            res.write(JSON.stringify(data))
        })
        .catch((err) => {
            res.write("something went wrong")
        })
        .finally(() =>res.end())
    }
})

server.listen(3001)

