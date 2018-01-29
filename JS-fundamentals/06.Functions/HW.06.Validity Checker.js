function checkValidity(input) {
    [input[0],input[1],input[2],input[3]] = [input[0],input[1],input[2],input[3]].map(Number)


    function isValidity(x1,y1,x2,y2) {
        let deltaX = x2 - x1
        let deltaY = y2 - y1
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        if(distance % 1 === 0){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }

    isValidity(input[0],input[1],0,0)
    isValidity(input[2],input[3],0,0)
    isValidity(input[0],input[1],input[2],input[3])
}
checkValidity([3, 0, 0, 4])
checkValidity([2, 1, 1, 1])