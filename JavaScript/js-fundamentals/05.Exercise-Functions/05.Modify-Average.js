function solution(num) {
    function avg(num) {
        let result = 0
        num = num + ''
        for (let i = 0; i < num.length; i++) {
            result += Number(num[i])
        }
        return result / num.length
    }

    function checkAvg(num) {
        if (avg(num) > 5){
            return false
        }else {
            return true
        }
    }

    while (checkAvg(num)){
        num += '9'
    }
    console.log(num)
}

solution(5835)