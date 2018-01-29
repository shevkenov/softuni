function matrixPairs(matrix) {
    let counter = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row + 1 < matrix.length){
                if(matrix[row][col] === matrix[row+1][col]){
                    counter++
                }
            }
            if (col + 1 < matrix[row].length){
                if(matrix[row][col] === matrix[row][col+1]){
                    counter++
                }
            }
        }
    }
    console.log(counter)
}
matrixPairs([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
)