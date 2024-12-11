const path = require("node:path")

class PathNormalizer {
    normalizePath(filePath) {
        return path.normalize(filePath)
    }

    joinPaths(...paths) {
        return path.join(...paths)
    }
}

const obj = new PathNormalizer()
console.log(obj.normalizePath("./user/../user/documents//file.txt"))
console.log((obj.joinPaths("/home", "user", "documents", "file.txt")))