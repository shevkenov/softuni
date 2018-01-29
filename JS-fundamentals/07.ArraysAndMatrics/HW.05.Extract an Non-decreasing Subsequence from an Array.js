function extractNumbers(arr) {

    let a = Number.NEGATIVE_INFINITY
    for (let i = 0; i < arr.length; i++) {
        if(Number(arr[i]) >= a)
        {
            a = arr[i]
            console.log(a);
        }
    }

}

extractNumbers([1, 3, 8, 4, 10, 12, 3, 2, 24])
//extractNumbers([20,3,5,15,6,1])


