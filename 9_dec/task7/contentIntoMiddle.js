
const fs = require("node:fs")

const buffer = new Buffer.alloc(200)
const buffer1 = new Buffer.alloc(200)
buffer1.write("hello awesome world")
try {
    const message = "hello world"
    const fd = fs.openSync('message.txt', "w+")
    fs.writeSync(fd,message, 0, message.length, 0)
    fs.readSync(fd, buffer, 0, buffer.length, 0);
    fs.writeSync(fd, buffer1, 0, buffer1.length, 0)
    fs.readSync(fd, buffer, 0, buffer.length, 0)
    console.log(buffer.toString("utf-8"))
    close(fd)
} catch(err) {

}



// const fs = require("fs");

// const buffer = Buffer.alloc(200);

// const fd = fs.openSync("message.txt", "w+");

// try {
//     const message = "Hello World!";
//     fs.writeSync(fd, message, 0, message.length, 0);
//     const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);

//     console.log("File content:", buffer.toString("utf-8", 0, bytesRead));
// } catch (err) {
//     console.error("Error:", err);
// } finally {
//     fs.closeSync(fd);
// }
