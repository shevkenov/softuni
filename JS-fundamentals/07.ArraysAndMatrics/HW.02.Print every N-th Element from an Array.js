function printElement(arr) {
    let n = Number(arr[arr.length-1])
    for (let i = 0; i < arr.length-1; i+=n) {
        if (i + n === undefined && i !== 0){
            break
        }
        console.log(arr[i])
    }
}
printElement([5,20,31,4,20,2])

