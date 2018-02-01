function concatAndReversed(arr){
    return arr.join('').split('').reverse().join('')
}

console.log(concatAndReversed(['I', 'am', 'student']));