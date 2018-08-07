function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
        console.log('$'.repeat(i))
    }
}

function printTriangle1(num) {
    for (let i = 1; i <= num; i++) {
        console.log(new Array(i+1).join('$'))
    }
}

printTriangle1(5)