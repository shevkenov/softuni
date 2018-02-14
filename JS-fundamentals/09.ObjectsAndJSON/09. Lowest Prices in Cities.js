function lowestPrice(arr) {
    let result = new Map()
    //let minValue = Number.NEGATIVE_INFINITY
    for (let row of arr) {
        let [town, product, value] = row.split(/\s*\|\s*/).filter(r => r !== '')
        if(! result.has(product)) {
            result.set(product, new Map());
        }
        result.get(product).set(town, Number(value));
    }
    for (let [brand] of result) {
        let lowestValue = Number.POSITIVE_INFINITY
        let lowestValueTown = ''
        for (let [town,price] of result.get(brand)) {
            if (price < lowestValue){
                lowestValue = price
                lowestValueTown = town
            }
        }
        console.log(`${brand} -> ${lowestValue} (${lowestValueTown})`)
    }
    //console.log(result)
}

lowestPrice(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000'])