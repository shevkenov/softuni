function bill(arr) {
    let products = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0){
            let product = arr[i]
            products.push(product)
        }else {
            sum += Number(arr[i])
        }
    }

    console.log(`You purchased ${printProducts(products)} for a total sum of ${sum}`)
    function printProducts(arr) {
        return (arr.join(', '))
    }
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])