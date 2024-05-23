function stringifyNumbers(obj) {

    if (typeof obj === 'number') return obj.toString(); 
    if (typeof obj !== 'object' || Array.isArray(obj)) return obj;

    let stringified = {};
    for (let key in obj) {
        stringified[key] = stringifyNumbers(obj[key]);
        console.log(stringified);
    }
    return stringified;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));
