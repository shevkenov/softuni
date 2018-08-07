function calculator(a, b, op) {
    let calc = function (a, b, op) {return op(a,b)}
    let add = function (a, b) {return a + b}
    let subtract = function (a, b) {return a - b}
    let multiplay = function (a, b) {return a * b}
    let devide = function (a, b) {return a / b}
    switch (op) {
        case '+': return calc(a, b, add)
        case '-': return calc(a, b, subtract)
        case '*': return calc(a, b, multiplay)
        case '/': return calc(a, b, devide)
    }

}

console.log(calculator(3, 5, '+'))
console.log(calculator(3, 5, '-'))
console.log(calculator(3, 5, '*'))
console.log(calculator(3, 5, '/'))