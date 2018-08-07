function solution(binary) {
    let result = 0
    let position = binary.length - 1
    for (let i = 0; i < binary.length; i++) {
        if (binary[position] === '1') {
            result += Math.pow(2, i)
        }
        position--
    }
    console.log(result)
}

solution('00001001')
solution('11110000')