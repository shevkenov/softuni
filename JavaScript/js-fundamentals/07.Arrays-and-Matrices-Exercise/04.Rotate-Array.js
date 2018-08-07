function rotateArray(arr) {
    let lastElement = arr.pop()
    let rotations = lastElement >= arr.length ? parseInt(lastElement % arr.length) : lastElement
    for (let i = 0; i < rotations; i++) {
        let last = arr.pop()
        arr.unshift(last)
        //console.log(arr.join(' '))
    }
    
    console.log(arr.join(' '))
}

rotateArray([1,2,3,4,2])
rotateArray(['Banana','Orange','Coconut','Apple','15'])