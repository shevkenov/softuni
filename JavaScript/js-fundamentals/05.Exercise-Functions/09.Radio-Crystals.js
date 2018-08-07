function solution(arr) {
    let targetThickness = Number(arr[0])

    function cut(crystal){return crystal / 4}
    function lap(crystal){return crystal - (crystal * 0.2)}
    function grind(crystal){return crystal - 20}
    function etch(crystal){return crystal - 2}
    function xray(crystal){return ++crystal}
    function wash(currentState){return Math.floor(currentState)}

    for (let i = 1; i < arr.length; i++) {
        let thickness = Number(arr[i])
        thickness = process(thickness,targetThickness,'Cut',cut)
        console.log(thickness)
        thickness = process(thickness,targetThickness,'Lap',lap)
    }

    function process(thickness,targetThickness,processName,op) {
        let turns = 0
        let size = op(thickness)
        while (size >= targetThickness){
            size = op(size)
            turns++
        }

        if (turns > 0){
            console.log(`${processName} x${turns}`)
            size = wash(size)
        }
        return size
    }

}

solution([1375, 50000])