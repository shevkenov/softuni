function printInput(arr) {
    let delimiter = arr.pop()
    console.log(arr.join(`${delimiter}`));
}

printInput(['One','Two','Three','Four','Five','-'])