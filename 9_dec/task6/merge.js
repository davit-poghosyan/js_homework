const fs = require("fs")

let stats
try {
    stats = fs.statSync('file2.txt'); 
    console.log("size if file2.txt is", stats.size )
} catch (err) {
    console.error('Error reading file stats:', err);
}

const buffer = Buffer.alloc(stats.size)

try {
    const fd = fs.openSync("file1.txt", "r")
    const fd1 = fs.openSync("file2.txt", "r")
    const fd2 = fs.openSync("merged.txt", "w")
    fs.readSync(fd, buffer, 0, buffer.length, 0)
    console.log(buffer.toString("utf-8"))
    fs.writeSync(fd2, buffer, 0, buffer.length, 0)
    fs.readSync(fd1, buffer, 0, buffer.length, 0)
    console.log(buffer.toString("utf-8"))
    fs.writeSync(fd2, buffer, 0, buffer.length,  stats.size)
} catch(err) {
    throw err
}