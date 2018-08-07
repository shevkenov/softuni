function solution(arr) {
    let v1 = arr[0] * 1000
    let v2 = arr[1] * 1000
    let t = arr[2] / 3600
    let [s1,s2] = [v1 * t,v2 * t]
    console.log(Math.abs(s1 - s2))
}

solution([0, 60, 3600])
solution([11, 10, 120])
solution([5, -5, 40])