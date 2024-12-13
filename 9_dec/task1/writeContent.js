const fs = require("fs")


try {
    const fd = fs.openSync("data.txt", "w")
    fs.writeFileSync("data.txt", "Hello, this is the first line.\n")
    fs.appendFileSync("data.txt", "This is the second line.\n")
    fs.close(fd,)
} catch(err) {
    console.log(err)
}