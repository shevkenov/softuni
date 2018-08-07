function solution(arr) {
    first = Number(arr[0])
    second = Number(arr[1])
    third = Number(arr[2])
    if (first >= second){
        if (first >= third){
            console.log(first)
        }else {
            console.log(third)
        }
    }else if (second >= third){
        console.log(second)
    }else {
        console.log(third)
    }
}

solution(5,-2,7)
solution(130,5,99)
solution(43,43.2,43.1)
solution(5,5,5)
solution(-10,-20,-30)