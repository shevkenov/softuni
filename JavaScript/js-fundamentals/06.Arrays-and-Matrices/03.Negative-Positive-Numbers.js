function solution(arr) {
    console.log(arr.sort((a,b) => a - b))
}

function solution1(arr){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            result.unshift(arr[i])
        }else {
            result.push(arr[i])
        }
    }
    console.log(result)
}

solution1([7, -2, 8, 9])
solution1([3, -2, 0, -1])
solution([7, -2, 8, 9])
solution([3, -2, 0, -1])