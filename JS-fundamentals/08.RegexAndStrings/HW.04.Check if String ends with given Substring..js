function checkEndString(str,substr) {
    let result = str.split(' ')
    console.log(result[result.length - 1] == substr ? true : false);
}
checkEndString('This sentence ends with fun?','fun?')