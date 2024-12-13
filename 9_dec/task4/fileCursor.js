const fs = require("fs")
const buffer = Buffer.alloc(100)
try {
    const fd = fs.openSync("example.txt", "w+")
    fs.writeSync(fd, "0123456789", 0, "utf-8")
    fs.writeSync(fd, "AB", 5, "utf-8")
    fs.readSync(fd,buffer, 0, 100, 0)
    console.log(buffer.toString("utf-8"))
    close(fd)
} catch(err) {
    throw err
}
