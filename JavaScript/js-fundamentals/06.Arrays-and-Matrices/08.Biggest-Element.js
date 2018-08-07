function solution(arr) {
    let maxNum = Number.NEGATIVE_INFINITY
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            maxNum = Math.max(maxNum,arr[i][j])
        }
    }
    console.log(maxNum)
}

function biggestElement(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}


solution([[20, 50, 10],
    [8, 33, 145]])
solution([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])