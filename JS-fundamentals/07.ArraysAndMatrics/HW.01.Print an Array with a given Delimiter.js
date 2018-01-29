function joinArray(arr){
    let delimiter = arr[arr.length-1]
    console.log(arr.slice(0,arr.length-1).join(delimiter))
}
joinArray(['One','Two','Three','Four','Five','-'])