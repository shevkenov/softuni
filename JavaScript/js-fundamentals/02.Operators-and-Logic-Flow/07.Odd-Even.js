function oddOrEven(num) {
    if (num % 2 === 0){
        console.log('even')
    }else if (num - parseInt(num) !== 0){
        console.log('invalid')
    }else {
        console.log('odd')
    }
}

oddOrEven(5)
oddOrEven(8)
oddOrEven(1.5)