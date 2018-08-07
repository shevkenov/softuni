function addRemoveElements(arr) {
    let initVal = 0
    let result = []
    for (let i = 0; i < arr.length; i++) {
        initVal++
        if (arr[i] === 'add'){
            result.push(initVal)
        }else if (arr[i] === 'remove'){
            result.pop()
        }
    }

    if (result.length > 0){
        console.log(result.join('\n'));
    }else{
        console.log('Empty')
    }
}

addRemoveElements(['add','add','remove','add','add'])