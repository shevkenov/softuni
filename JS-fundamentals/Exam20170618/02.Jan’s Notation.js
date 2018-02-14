function calcNumbers(arr) {
    let numbers = []
    let instructionSet = {
        '-': (a,b)=>{return a - b},
        '+': (a,b)=>{return a + b},
        '*': (a,b)=>{return a * b},
        '/': (a,b)=>{return a / b}
    }
    for (let i of arr) {
        let instruction = instructionSet[i]
        if (instruction === undefined){
            numbers.push(i)
        }else {
            let [second,first] = [numbers.pop(),numbers.pop()]
            if(first === undefined || second === undefined){
                console.log('Error: not enough operands!')
                return
            }
            numbers.push(instruction(first,second))
        }
    }
    if (numbers.length > 1){
        console.log('Error: too many operands!')
    }else {
        console.log(numbers.pop())
    }
}

calcNumbers([5,
    3,
    4,
    '*',
    '-']
)