function collectStrings(obj) {
    if (typeof obj === 'string') return [obj];
    if (typeof obj !== 'object' || Array.isArray(obj)) return [];

    let strings = [];
    for (let key in obj) {
        collectStrings(obj[key]).forEach(element => strings.push(element));
    }
    return strings; 
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"]