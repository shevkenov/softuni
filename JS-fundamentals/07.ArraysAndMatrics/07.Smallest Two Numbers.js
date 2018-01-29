function sortNumbers(arr){
    console.log(
        arr.sort((a,b) => a-b).slice(0,2)
    )
}
sortNumbers([30, 15, 50, 5])