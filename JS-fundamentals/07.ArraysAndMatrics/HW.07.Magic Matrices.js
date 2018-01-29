function magicMetrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].map(Number).reduce((a, b) => a + b,0)
        let sumCol = 0
        for (let col = 0; col < matrix.length; col++) {
            sumCol += Number(matrix[col][row])
        }
        if (sumCol !== sumRow){
            return false
        }
    }
    return true
}

console.log(magicMetrix([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]

));
