function solution(n, k) {
    let result = [1]
    for (let i = 1; i < n; i++) {
        result[i] = result.slice(Math.max(0, result.length - k), k + i).reduce((x, y) => x + y)
    }
    console.log(result)
}

function solution1(n, k) {
    let result = [1]
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k)
        let end = i
        let sum = result.slice(start,end).reduce((x,y) => x + y)
        result[i] = sum
    }
    console.log(result)
}



solution1(6, 3)
solution1(8,2)