function yieldSpices(num) {
    let startingYield = Number(num)
    let daysCount = 0
    let totalAmount = 0
    while (startingYield >= 100){
        daysCount++
        totalAmount += startingYield - 26
        startingYield -= 10
    }
    totalAmount -= 26
    if (totalAmount < 0){
        totalAmount = 0
    }
    console.log(daysCount)
    console.log(totalAmount)
}

yieldSpices(-111)