function sumNums(nums) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    let vat = sum * 0.2
    let total = Number(vat) + Number(sum)
    console.log("sum = " + sum)
    console.log("VAT = " + vat)
    console.log("Total = " + total)
}

sumNums([1.20, 2.60, 3.50])