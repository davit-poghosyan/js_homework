const path = require("node:path")

class PathAnalyzer {

    getBaseName(filePath) {
        return path.basename(filePath)
    }

    getDirName(filePath) {
        return path.dirname(filePath)
    }

    getExtension(filePath) {
        return path.extname(filePath)
    }

    isAbsolutePath(filePath) {
        return path.isAbsolute(filePath)
    }
}

const obj = new PathAnalyzer();
console.log(obj.getBaseName(__filename))
console.log(obj.getDirName(__filename))
console.log(obj.getExtension(__filename))
console.log(obj.isAbsolutePath("./PathAnalyzer"))