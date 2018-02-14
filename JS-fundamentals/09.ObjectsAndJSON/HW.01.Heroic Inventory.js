function heroic(arr) {
    let heroes = []
    for (let row of arr) {

        let [name,level,items] = row.split(/\s*\/\s*/).filter(h => h !== '')
        let item = items ? items.split(',').filter(i => i !== '').map(i => i.trim()) : []
        let hero = {name:name,level:Number(level),items:item}
        heroes.push(hero)
    }
    console.log(JSON.stringify(heroes))
}
heroic(['Isacc / 25 / ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])