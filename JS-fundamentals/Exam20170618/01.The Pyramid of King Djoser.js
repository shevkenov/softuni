function buildPyramid(base,increment) {
    base = Number(base)
    increment = Number(increment)
    let stones = 0
    let marble = 0
    let lapis = 0
    let gold = base % 2 === 0 ? 4 : 1
    let floor = 1
    while (base > 2){
        let basemant = Math.pow(base,2)
        let currentStones = Math.pow((base - 2),2)
        let currentMarble = basemant - currentStones
        if (floor % 5 === 0){
            lapis += currentMarble
            stones += currentStones
        }else {
            stones += currentStones
            marble += currentMarble
        }
        if (base == 2){
            break
        }
        floor++
        base -= 2
    }
    console.log('Stone required: ' + Math.ceil(stones * increment))
    console.log('Marble required: ' + Math.ceil(marble * increment))
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis * increment))
    console.log('Gold required: ' + Math.ceil(gold * increment))
    console.log('Final pyramid height: ' + Math.floor(floor*increment))
}

buildPyramid(23,0.5)