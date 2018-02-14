function capitalizeWord(str) {
    let words = str.split(' ')
    let result = ''
    for (let obj of words) {
        let firstLetter = obj[0].toUpperCase()
        let restOfLetters = obj.slice(1).toLowerCase()
        result += firstLetter+restOfLetters+' '
    }
    console.log(result)
}

capitalizeWord('Capitalize these words')
capitalizeWord('Was that Easy? tRY thIs onE for SiZe!')
