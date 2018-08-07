function solution(arr) {
    let [x, y, xMin, xMax, yMin, yMax] = [Number(arr[0]),Number(arr[1]),Number(arr[2]),Number(arr[3]),Number(arr[4]),Number(arr[5])]
    if (y >= yMin && y <= yMax){
        if (x >= xMin && x <= xMax){
            console.log('inside')
            return
        }
    }
    console.log('outside')
}

solution([8,-1,2,12, -3,3])
solution([12.5,-1,2,12,-3,3])