function drawSquare(n) {
    function printStar(count) {
        console.log('*'.repeat(count))
    }

    for (let i = 0; i < n; i++) {
        printStar(n)
    }
}

function printSquare(n) {
    for (let i = 0; i < n; i++) {
        console.log(new  Array(n+1).join('*'))
    }
}

(function (n) {
    for (let i = 0; i < n; i++) {
        console.log(new  Array(n+1).join('*'))
    }
}(5))

drawSquare(5)
printSquare(5)