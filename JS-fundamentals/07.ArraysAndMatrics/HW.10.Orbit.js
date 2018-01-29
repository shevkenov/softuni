function printOrbit(input) {
    let [rows, cols, targetX, targetY] = input
    let matrix = fillMatrixWithZeros(rows,cols)
    let number = 1
    let waves = 1

    matrix[targetX][targetY] = number
    while (!isMatrixFilled(matrix)){
        number++
        let startX = Math.max(targetX - waves,0)
        let startY = Math.max(targetY - waves,0)
        let bottomX = Math.min(targetX + waves, rows - 1)
        let bottomY = Math.min(targetY + waves, cols - 1)

        for (let row = startX; row <= bottomX; row++) {
            for (let col = startY; col <= bottomY; col++) {
                if (matrix[row][col] === 0){
                    matrix[row][col] = number
                }
            }
        }
        waves++
    }
    printMatrix(matrix)
    function isMatrixFilled(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] == 0){
                    return false
                }
            }
        }
        return true
    }
    function printMatrix(matrix) {
        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }
    function fillMatrixWithZeros(rows,cols) {
        let matrix = []
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number))
        }
        return matrix
    }
}

printOrbit([4, 4, 0, 0])