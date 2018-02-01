function splitStr(str) {
    let regex = /[.,()\s;]+/
    let elements = str.split(regex)
    console.log(elements.join('\n'))
}

splitStr('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')