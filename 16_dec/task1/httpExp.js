const http = require("node:http")

const server = http.createServer((req, res) => {
    console.log("server created")
    if (req.url === "/") {
        let data
        res.setHeader("content-type", "application/json")
        switch (req.method) {
            case 'GET' : 
                data = {"message" : "welcome our server"}
                res.write(JSON.stringify(data))
                console.log(`http method: ${req.method}`)
            case "POST":
            case "PUT":
            case "PATCH" :
            case "DELETE" :
            case "OPTIONS" :
            case "PATCH" :
                data = {"message" : `http method: ${req.method}`}
                res.write(JSON.stringify(data))
                console.log(`http method: ${req.method}`)
                break;
            default :
                data = {message : `your methond is not supported by server`}
                res.statusCode = 405
                res.statusMessage = "Method not supported"
                res.write(JSON.stringify(data))
                console.log("http method: Unsupported")
        }
        res.end()
    }

})

server.listen(3000, () =>{
    console.log('listening')
})

