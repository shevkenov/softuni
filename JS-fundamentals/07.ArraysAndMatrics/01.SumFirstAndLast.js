function sumEndElementsOfArray(arr) {
    let sum = (a,b) => a + b
    console.log(sum(Number(arr[0]),Number(arr[arr.length-1])))
}
sumEndElementsOfArray(['20', '30', '40'])
sumEndElementsOfArray(['10', '5'])