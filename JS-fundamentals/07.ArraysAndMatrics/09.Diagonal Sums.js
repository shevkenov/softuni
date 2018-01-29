function matrixDiagonalSum(matrix) {
    let normalDiagonal = 0
    let backDiagonal = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j){
                normalDiagonal += matrix[i][j]
            }
            if (i + j === matrix.length-1){
                backDiagonal += matrix[i][j]
            }
        }
    }
    console.log(`${normalDiagonal} ${backDiagonal}`)
}
matrixDiagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)