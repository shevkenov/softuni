function solution(a,b,c) {
    let result = Math.pow(b,2) - 4 * a * c
    if (result > 0){
        let x1 = (-b + Math.sqrt(result))/(2 * a)
        let x2 = (-b - Math.sqrt(result))/(2 * a)
        console.log(Math.min(x1,x2))
        console.log(Math.max(x1,x2))
    }else if (result === 0){
        let x = -b / (2*a)
        console.log(x)
    }else {
        console.log('No')
    }
}

solution(6,11,-35)
solution(1,-12,36)
solution(5,2,1)