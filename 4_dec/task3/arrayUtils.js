function unique(arr) {
    return [...new Set(arr)];
}


function flatten(arr) {
    flattenHelper(arr, 0)
}


function flattenHelper(arr, i) {
    if (i >= arr.length) {
        return;
    }

    if (Array.isArray(arr[i])) {
        const nestedArray = arr.splice(i, 1)[0];
        arr.splice(i, 0, ...nestedArray);
        flattenHelper(arr, i); 
    } else {
        flattenHelper(arr, i + 1);
    }
}





function chunk(arr, size) {
    let result = []
    
    for (let i = 0 ; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }

    return result
} 



module.exports = {
    unique : unique,
    flatten : flatten,
    chunk : chunk
}