function oddNumbers(arr) {
    console.log(arr.map(el => Number(el) * 2).filter((el,i) => i % 2 !==0).reverse().join(' '))
}

oddNumbers([10, 15, 20, 25])
oddNumbers([3, 0, 10, 4, 7, 3])