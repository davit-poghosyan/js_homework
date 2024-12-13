// const fs = require('fs');
// const path = require("path")

// const buffer = Buffer.alloc(64);

// try {
//     const fd = fs.openSync(path.join("9_dec","task1", "data.txt"), "r"); 
//     fs.readSync(fd, buffer, 0, buffer.length, 0);

//     console.log(buffer.toString("utf-8"));

//     fs.closeSync(fd);
// } catch (err) {
//     throw err
// }
// console.log(__filename)


const fs = require('fs')
const path = require("path")

const buffer = Buffer.alloc(64)

try {
    const filePath = path.join(__dirname, "../task1", "data.txt")
    const fd = fs.openSync(filePath, "r")

    fs.readSync(fd, buffer, 0, buffer.length, 0)
    console.log(buffer.toString("utf-8"))

    fs.closeSync(fd)
} catch (err) {
    console.error(err)
}
