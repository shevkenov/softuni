function checkString(str,substr) {
    let result = str.indexOf(substr) < 0 ? false : true
    console.log(result)
}
checkString('How have you been?','how')
checkString('The quick brown fox…','The quick brown fox…')
checkString('Marketing Fundamentals, starting 19/10/2016','Marketing Fundamentals, sta')