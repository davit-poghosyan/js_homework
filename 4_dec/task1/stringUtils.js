function reverse(src) {
    if (typeof src != "string") {
        throw new Error("provided argumnet is not string")
    } 
    
    let reveresed = ""
    for (let i =1; i <= src.length; ++i) {
        reveresed += src[src.length - i]

    }
    return reveresed
}

function capitalize(src) {
    if (typeof src != "string") {
        throw new Error("provided argumnet is not string")
    } 

    return src.charAt(0).toUpperCase() + src.slice(1)
}

function truncate(src, length) {
    if (typeof src != "string") {
        throw new Error("provided argumnet is not string")
    } 

    return src.slice(0, length)
}


module.exports = {
    reverse : reverse,
    capitalize : capitalize,
    truncate : truncate
}