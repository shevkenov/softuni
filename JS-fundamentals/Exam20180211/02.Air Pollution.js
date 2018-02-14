function estimatePollutionAreas(matrix,arr) {
    let matrixOfNum = []
    for (let row of matrix) {
        let currentRow = []
        let arrOfRow = row.split(' ')
        for (let el of arrOfRow) {
            currentRow.push(Number(el))
        }
        matrixOfNum.push(currentRow)
    }

    for (let type of arr) {
        let typeTokens = type.split(' ')
        let [name, num] = [typeTokens[0],Number(typeTokens[1])]
        if (name === 'breeze'){
            for(let col = 0; col < 5; col++){
                matrixOfNum[num][col] -= 15
                if (matrixOfNum[num][col] < 0){
                    matrixOfNum[num][col] = 0
                }
            }
        }
        if (name === 'gale'){
            for(let row = 0; row < 5; row++){
                matrixOfNum[row][num] -= 20
                if (matrixOfNum[row][num] < 0){
                    matrixOfNum[row][num] = 0
                }
            }
        }
        if (name === 'smog'){
            for (let row1 = 0; row1 < 5; row1++){
                for(let col = 0; col < 5; col++){
                    matrixOfNum[row1][col] += num
                    if (matrixOfNum[row1][col] < 0){
                        matrixOfNum[row1][col] = 0
                    }
                }
            }
        }
    }
    let result = []
    for (let row1 = 0; row1 < 5; row1++){
        for(let col = 0; col < 5; col++){
            if (matrixOfNum[row1][col] >= 50){
                result.push(`[${row1}-${col}]`)
            }
        }
    }
    if (result.length > 0){
        console.log('Polluted areas: ' + result.join(', '))
    }else {
        console.log('No polluted areas')
    }


}

estimatePollutionAreas([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
)