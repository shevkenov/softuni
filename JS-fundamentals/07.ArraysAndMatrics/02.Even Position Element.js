function evenPositionInArray(arr) {
    console.log(arr.filter((el,i) => {
        return i % 2 === 0
    }).join(' '))
}
evenPositionInArray([1,2,3,4,5,6])