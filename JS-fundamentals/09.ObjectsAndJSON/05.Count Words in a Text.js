function countWords(arr) {
    let result = {}
    for (let obj of arr) {
        let allWords = obj.split(/[^A-Za-z0-9_]+/).filter(w => w !== '')
        for (let word of allWords) {
            if (result.hasOwnProperty(word)){
                result[word]++
            }else {
                result[word] = 1
            }
        }
    }
    console.log(JSON.stringify(result))
}
countWords(['JS devs use Node.js for server-side JS.-- JS for devs'])