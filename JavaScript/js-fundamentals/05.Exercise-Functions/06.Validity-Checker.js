function solution(arr) {
    let [x1,y1,x2,y2] = [arr[0],arr[1],arr[2],arr[3]]
    let t1 = getDistance(x1,y1)
    let t2 = getDistance(x2,y2)
    let t1t2 = getDistance(x2-x1,y2-y1)

    printResult(t1,x1,y1,0,0)
    printResult(t2,x2,y2,0,0)
    printResult(t1t2,x1,y1,x2,y2)

    function printResult(t,x1,y1,x2,y2) {
        if (Number.isInteger(t)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
    
    function getDistance(x,y) {
        return Math.sqrt(x ** 2 + y ** 2)
    }
}

solution([3, 0, 0, 4])
solution([2, 1, 1, 1])