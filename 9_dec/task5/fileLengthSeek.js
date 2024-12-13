const fs = require("fs")

let stats
try {
    stats = fs.statSync('data.txt'); 
    console.log("size if data.txt is", stats.size )
} catch (err) {
    console.error('Error reading file stats:', err);
}

const buffer = Buffer.alloc(stats.size)
try {
    const fd = fs.openSync("data.txt", "r")
    const bytes = fs.readSync(fd, buffer, 0 , stats.size/2, Math.floor(stats.size/2))
    console.log(buffer.toString("utf-8"))
    close(fd)
} catch(err) {
    throw err
}