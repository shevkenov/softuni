function polishCrystals(input) {
    let targetSize = input[0]

    let cut = (number) => number / 4
    let lap = (number) => (number * 0.8)
    let grind = (number) => number -= 20
    let etch = (number) => number -= 2
    let transportAndWash = (number) => {
        console.log("Transporting and washing")
        return Math.floor(number)
    }
    let xRay = (number) => {
        console.log("X-ray x1")
        return ++number
    }

    for (let i = 1; i < input.length; i++) {
        let microns = input[i]
        console.log(`Processing chunk ${microns} microns`)
        microns = executeOperatin(targetSize,microns,'Cut',cut)
        microns = executeOperatin(targetSize,microns,'Lap',lap)
        microns = executeOperatin(targetSize,microns,'Grind',grind)
        microns = executeOperatin(targetSize,microns,'Etch',etch)

        if (microns + 1 == targetSize){
            microns = xRay(microns)
        }
        console.log(`Finished crystal ${microns} microns`)
    }

    function executeOperatin(targetSize,size,operationName,operation) {
        let counter = 0
        while (operation(size) >= targetSize || size - targetSize === 1){
            size = operation(size)
            counter++
        }
        if(counter > 0){
            console.log(operationName + " x" + counter)
            size = transportAndWash(size)
        }
        return size
    }
}
polishCrystals([1375, 50000])
console.log("--------------------")
polishCrystals([1000, 4000, 8100])