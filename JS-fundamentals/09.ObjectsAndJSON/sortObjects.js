let obj = {
    obj2 : {value: 1},
    obj3 : {value: 4},
    obj1 : {value: 3},
    obj4 : {value: 2},
}

let arryaObj = Object.keys(obj).sort((o1,o2) => obj[o1].value - obj[o2].value)
    .forEach(o => console.log(o + ' -> ' + JSON.stringify(obj[o])))