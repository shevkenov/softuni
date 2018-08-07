function solution(matrix) {
    let equals = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row + 1 < matrix.length){
                if (matrix[row][col] === matrix[row+1][col]){
                    equals++
                }
            }
            if (col + 1 < matrix[row].length){
                if (matrix[row][col] === matrix[row][col+1]){
                    equals++
                }
            }
        }
    }
    console.log(equals)
}

solution([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']])
solution([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']])