function cityMarket(arr) {
    let result = {}
    for (let str of arr) {
        let[town, item, values] = str.split(/\s*->\s*/).filter(s => s.trim() !== '')
        let sum = values.split(/\s*:\s*/).map(s => Number(s)).reduce((a,b) => a*b)
        if (result.hasOwnProperty(town)){
            if (result[town][item]){
                result[town][item] = result[item] + sum
            }else {
                result[town][item] = sum
            }
        }else {
            let itemResult = {}
            itemResult[item] = sum
            result[town] = itemResult
        }
    }
    for (let key in result) {
        console.log('Town - ' + key)
        for (let item in result[key]) {
            console.log('$$$' + item + ' : ' + result[key][item])
        }
    }
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'])