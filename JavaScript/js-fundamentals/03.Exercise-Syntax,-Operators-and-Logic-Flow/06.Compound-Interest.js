function calcInterest(arr) {
    let [p,i,n,t] = [arr[0],arr[1]/100,arr[2],arr[3]]
    n = 12 / n
    let result = p * (Math.pow(1 + i/n,n*t))
    console.log(result.toFixed(2))
}

calcInterest([1500, 4.3, 3, 6])
calcInterest([100000, 5, 12, 25])