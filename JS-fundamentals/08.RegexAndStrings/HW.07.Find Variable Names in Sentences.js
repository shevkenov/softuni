function findNamesInSentance(str) {
    let regex = /(\s|^)_[A-Za-z0-9]+(?= |$)/g
    let match = regex.exec(str)
    let result = []
    while (match){
        result.push(match[0].trim().substring(1))
        match = regex.exec(str)
    }
    console.log(result.join(','))
}
findNamesInSentance('The _id and _age variables are both integers.')
findNamesInSentance('__invalidVariable _evenMoreInvalidVariable_ _validVariable')