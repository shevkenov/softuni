function emailValidation(str) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g
    if(regex.test(str)){
        console.log('Valid')
    }else {
        console.log('Invalid')
    }
}
emailValidation('valid@emai2.bg')
emailValidation('valid@emai.bg')