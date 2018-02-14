function townToJson(arr) {
    let result = []
    let keys = arr[0].split(/\s*\|\s*/).filter(st => st !== '')
    for (let values of arr.slice(1)) {
        let obj = {}
        let val = values.split(/\s*\|\s*/).filter(st => st !== '')
        obj[keys[0]] = val[0]
        obj[keys[1]] = Number(val[1])
        obj[keys[2]] = Number(val[2])
        result.push(obj)
    }
    console.log(JSON.stringify(result))
}
townToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])