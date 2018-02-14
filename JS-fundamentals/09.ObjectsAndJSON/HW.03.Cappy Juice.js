function cappyJuice(arr) {
    let result = {}
    let bottles = {}
    for (let str of arr) {
        let [name,quantity] = str.split('=>').filter(j => j !== '').map(s => s.trim())
        if (!result.hasOwnProperty(name)){
            result[name] = 0
        }
        result[name] += Number(quantity)
        if (result[name] >= 1000){
            bottles[name] = parseInt(result[name]/1000)
        }
    }
    for (let juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`)
    }
}

cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])