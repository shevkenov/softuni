function cityMarket(arr) {
    let myMap = new Map()
    for (let str of arr) {
        let[town, item, values] = str.split(/\s*->\s*/).filter(s => s.trim() !== '')
        let sum = values.split(/\s*:\s*/).map(s => Number(s)).reduce((a,b) => a*b)
        if (myMap.has(town)){
            if (myMap.get(town).has(item)){
                myMap.get(town).set(item,myMap.get(item) + sum)
            }else {
                myMap.get(town).set(item,sum)
            }
        }else {
            let itemMaps = new Map()
            itemMaps.set(item,sum)
            myMap.set(town,itemMaps)
        }
    }
    for (let [key,value] of myMap) {
        console.log('Town - ' + key)
        for (let [item,sum] of myMap.get(key)) {
            console.log('$$$' + item + ' : ' + sum)
        }
    }
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])