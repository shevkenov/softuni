function upper(str) {
    console.log(str.toUpperCase().split(/\W+/).filter(x => x !== '').join(', '));
}

upper('Hi, how are you?')