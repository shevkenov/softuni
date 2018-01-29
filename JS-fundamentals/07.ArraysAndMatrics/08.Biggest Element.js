function theBiggestElement(matrix) {
    console.log(
        matrix.map(arr => arr.sort((a,b) => a < b)[0]).sort((a,b) => a < b)[0]
    );
}

theBiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
)

function theBiggestNum(matrix) {
    let min = Number.NEGATIVE_INFINITY
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > min){
                min = matrix[i][j]
            }
        }
    }
    console.log(min)
}
theBiggestNum([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
)