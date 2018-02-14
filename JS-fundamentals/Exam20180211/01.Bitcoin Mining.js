function calculateBitcoins(arr){
    arr = arr.map( a => Number(a))
    let totalGold = 0
    let dayCounter = 0
    let firstDayBoughtBitcoins = 0
    let isFirstDay = true
    for (let i = 0; i < arr.length; i++) {
        let gold = arr[i]
        dayCounter++
        if (dayCounter % 3 === 0){
            gold = gold - (gold * 0.3)
        }
        totalGold += gold
        if (totalGold * 67.51 > 11949.16 && isFirstDay){
            firstDayBoughtBitcoins = dayCounter
            isFirstDay=false
        }
    }
    let bitcoins = (totalGold * 67.51) / 11949.16
    let leftMoney = (totalGold * 67.51) - (parseInt(bitcoins) * 11949.16)
    console.log('Bought bitcoins: ' + parseInt(bitcoins))
    if (firstDayBoughtBitcoins > 0){
        console.log('Day of the first purchased bitcoin: ' + firstDayBoughtBitcoins)
    }
    console.log('Left money: ' + leftMoney.toFixed(2) + ' lv.')
}

calculateBitcoins(['3124.15', '504.212', '2511.124'])