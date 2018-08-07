function solution(arr) {
    let [x1,y1,z1,x2,y2,z2] = [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]]
    let [a,b,c] = [Math.abs(z1-z2),Math.abs(y1-y2),Math.abs(x1-x2)]
    let distance = Math.sqrt(a * a + b * b + c * c)
    console.log(distance)
}

solution([1, 1, 0, 5, 4, 0])
solution([3.5, 0, 1, 0, 2, -1])