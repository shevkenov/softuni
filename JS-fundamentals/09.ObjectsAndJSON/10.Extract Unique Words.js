function uniqueWords(arr) {
    let uniqueWord = new Set()
    for (let str of arr) {
        let words = str.split(/[^a-zA-Z0-9_]+/).filter(w => w !== '')
        for (let obj of words) {
            uniqueWord.add(obj.toLowerCase())
        }
    }
    console.log([...uniqueWord.values()].join(', '))
}

uniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. \n' +
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. \n' +
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. \n' +
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. \n' +
'Morbi in ipsum varius, pharetra diam vel, mattis arcu. \n' +
'Integer ac turpis commodo, varius nulla sed, elementum lectus. \n' +
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.\n'])