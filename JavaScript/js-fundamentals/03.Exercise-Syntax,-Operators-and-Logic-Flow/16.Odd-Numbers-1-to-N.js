function printOddNumbers(num) {
    num = Number(num)
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0){
            console.log(i)
        }
    }
}
printOddNumbers(5)
printOddNumbers(4)
printOddNumbers(7)