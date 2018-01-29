function processOddNumbers(arr){
    console.log(
        arr.filter((e,i) => i % 2 !== 0).map(e => e * 2).reverse()
    )
}
processOddNumbers([3, 0, 10, 4, 7, 3])