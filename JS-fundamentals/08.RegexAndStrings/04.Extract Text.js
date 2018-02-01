function extractText(str) {
    let startIndex = 0
    let result = []
    let start = str.indexOf('(',startIndex)
    while (start > -1){
        let end = str.indexOf(')',start)
        if(end == -1){
            break
        }
        result.push(str.substring(start+1,end))
        startIndex = end + 1
        start = str.indexOf('(',startIndex)
    }
    console.log(result.join(', '))
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')