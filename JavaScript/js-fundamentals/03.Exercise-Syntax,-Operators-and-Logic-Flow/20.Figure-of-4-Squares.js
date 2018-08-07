function square(num) {
    let rows = num
    if (num % 2 === 0){
        rows = num - 1
    }
    let result = ''
    for (let i = 1; i <= rows; i++) {
        let dushes =  '+' + '-'.repeat(num-2) + '+' + '-'.repeat(num-2) + '+\n'
        let speces =  '|' + ' '.repeat(num-2) + '|' + ' '.repeat(num-2) + '|\n'
        if (i === 1 || i === rows || i === Math.ceil(rows/2)){
            result += dushes
        }else {
            result += speces
        }
    }
    console.log(result)
}

square(7)
square(6)
square(5)
square(4)