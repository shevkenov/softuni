function captureNumbers(arr) {
    let result = []
    let regex = /\d+/g
    for (let i = 0; i < arr.length; i++) {
        if (regex.test(arr[i])){
            result.push(arr[i].match(regex).join(' '))
        }
    }
    console.log(result.join(' '))
}
captureNumbers(['The300 and 3','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45'])
captureNumbers('123a456','789b987','654c321','0')