function modifiedNumber(number) {
    let numberStatus = isHigherThen5(numberAvg(number))

    while (!numberStatus){
        number = number + "9"
        numberStatus = isHigherThen5(numberAvg(number))
    }
    console.log(number);

    function numberAvg(number) {
        let length = number.toString().length
        let sum = 0
        for (let i = 0; i < length; i++) {
            sum += parseInt(number.toString()[i])
        }
        return (sum / length)
    }

    function isHigherThen5(avg) {
        return avg > 5
    }
}

function modifiedNumberArrow(number) {
    let strNum = String(number)
    let getAvg = (numString) => strNum.split('').map(Number).reduce((a,b) => a += b) / strNum.length
    while (getAvg(strNum) <= 5){
        strNum += '9'
    }
    console.log(strNum)
}
modifiedNumber(101)
modifiedNumberArrow(101)
modifiedNumber(5835)
modifiedNumberArrow(5835)
