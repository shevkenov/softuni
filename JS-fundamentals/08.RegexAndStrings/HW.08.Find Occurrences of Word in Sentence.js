function wordOccurences(str,regex) {
    regex = '\\b' + regex + '\\b'
    let reg = new RegExp(regex,'ig')
    let match = reg.exec(str)
    let counter = 0
    while (match){
        ++counter
        match = reg.exec(str)
    }
    console.log(counter)
}

wordOccurences('How do you plan on achieving that? How? How can you even think of that?','how')