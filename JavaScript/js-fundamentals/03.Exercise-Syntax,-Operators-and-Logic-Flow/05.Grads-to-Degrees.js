function convertGradsToDegrees(num) {
    let degress = num * 0.9
    let result = degress % 360
    if (num < 0){
        result = 360 + result
    }
    console.log(Math.abs(result))
}

convertGradsToDegrees(850)
convertGradsToDegrees(-50)
convertGradsToDegrees(100)
convertGradsToDegrees(400)