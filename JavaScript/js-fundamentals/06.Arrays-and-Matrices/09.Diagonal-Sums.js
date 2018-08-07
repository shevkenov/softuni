function solution(matrix) {
    let firstDiag = 0
    let secondDiag = 0
    for (let row = 0; row < matrix.length; row++) {
        firstDiag += matrix[row][row]
        secondDiag += matrix[row][matrix.length-1-row]
    }
    console.log(firstDiag + ' ' + secondDiag)
}

solution([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])