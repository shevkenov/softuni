function isPalindrome(str) {
    let backward = function f(str){
        return str.split('').reverse().join('')
    }
    if (backward(str) === str){
        return true
    }
    return false
}

function isPalindrome1(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] === str[str.length - 1 - i]){
            return true
        }
        return false
    }
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('haha'))
console.log(isPalindrome1('abba'))