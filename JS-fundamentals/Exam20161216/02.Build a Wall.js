function estemateConcrete (arr) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue
    let result = []
    let totalMoney = 0
    let totalAmount = arr.length * 30
    let currentAmmount = arr.map(a => Number(a)).reduce(reducer)
    while (currentAmmount < totalAmount){
        let concretePerDay = 0
        for (let i = 0; i < arr.length; i++) {
            let currentNumber = Number(arr[i])
            if (currentNumber >= 30){
                continue
            }
            arr[i] = currentNumber + 1
            concretePerDay += 195
        }
        totalMoney += concretePerDay * 1900
        result.push(concretePerDay)
        currentAmmount = arr.map(a => Number(a)).reduce(reducer)
    }

    console.log(result.join(', '))
    console.log(totalMoney + ' pesos')
}

estemateConcrete(['21','25','28'])