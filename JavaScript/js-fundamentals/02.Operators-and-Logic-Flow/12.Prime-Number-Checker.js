function primeNumber(num) {
    let isPrime = true
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0){
            isPrime = false
            break
        }
    }
    console.log(isPrime && num>1)
}

primeNumber(0)