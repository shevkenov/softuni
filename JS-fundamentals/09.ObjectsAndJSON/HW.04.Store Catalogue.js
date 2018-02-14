function storeCatalogue(arr){
    let catalogue = {}
    for (let str of arr) {
        let[name,price] = str.split(/:/).filter(c => c !== '').map(c => c.trim())
        catalogue[name] = Number(price)
    }

    let initials = new Set()
    Object.keys(catalogue).sort().forEach(o => initials.add(o[0]))
    for (let letter of initials) {
        console.log(letter)
        for (let book of Object.keys(catalogue).sort()) {
            if (book[0] == letter){
                console.log(`  ${book}: ${catalogue[book]}`)
            }
        }
    }
}
storeCatalogue(['Banana : 2' ,
'Rubics Cube : 5' ,
'Raspberry P : 4999' ,
'Rolex : 100000' ,
'Rollon : 10' ,
'Rali Car : 2000000' ,
'Pesho : 0.000001',
'Barrel : 10'])