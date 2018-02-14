function countWordsInMap(arr) {
    let result = new Map()
    for (let str of arr) {
        let words = str.split(/[^A-Za-z0-9_]/).filter(s => s.trim() !== '')
        for (let word of words) {
            word = word.toLowerCase()
            if (result.has(word)){
                result.set(word,result.get(word)+1)
            }else {
                result.set(word,1)
            }
        }
    }
    let sortedArray = Array.from(result.keys()).sort((a,b) => a.localeCompare(b))
    for (let key of sortedArray) {
        console.log("'" + key + "' -> " + result.get(key) + ' times')
    }
}

countWordsInMap(['Far too slow, you\'re far too slow.'])