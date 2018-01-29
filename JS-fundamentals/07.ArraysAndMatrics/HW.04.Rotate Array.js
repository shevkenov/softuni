function rotateArray(arr) {
    let n = Number(arr.pop())
    for (let i = 0; i < n % arr.length ; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple','15'
])
