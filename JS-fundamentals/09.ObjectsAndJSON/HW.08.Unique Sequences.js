function arraysOfNumbers(arr) {
    let result = new Map()

    for (let line of arr) {
        let arrayOfLine = JSON.parse(line).map(Number).sort((a,b) => b - a)
        let strArray = `[${arrayOfLine.join(', ')}]`
        if (!result.has(strArray)){
            result.set(strArray,arrayOfLine.length)
        }
    }

    console.log([...result.keys()].sort((a, b) => result.get(a) - result.get(b)).join('\n'));
}

arraysOfNumbers(['[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'])