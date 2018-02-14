function populationInTown(arr) {
    let myMap = new Map()
    for (let obj of arr) {
        let [name,population] = obj.split(/\s*<->\s*/).filter(a => a.trim() !== '')
        if(myMap.has(name)){
            myMap.set(name,myMap.get(name)+Number(population))
        }else {
            myMap.set(name,Number(population))
        }
    }
    for (let [key,value] of myMap) {
        console.log(key + " : " + value)
    }
}

populationInTown(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'])