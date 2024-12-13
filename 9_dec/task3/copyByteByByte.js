
const fs = require('fs');

const buffer = Buffer.alloc(16);

try {
    const fd1 = fs.openSync("data.txt", "r");
    const fd2 = fs.openSync("copy.txt", "w");

    let bytesRead;
    let position = 0;

    do {
        bytesRead = fs.readSync(fd1, buffer, 0, buffer.length, position);

        fs.writeSync(fd2, buffer, 0, bytesRead);

        position += bytesRead;
    } while (bytesRead > 0);  

    fs.closeSync(fd1);
    fs.closeSync(fd2);


} catch (err) {
    console.error("Error during file copy:", err);
    throw err;
}
