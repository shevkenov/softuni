function filter(age,name1,age1,name2,age2) {
    let personA = {name:name1,age:age1}
    let personB = {name:name2,age:age2}
    if (personA.age >= age){console.log(personA)}
    if (personB.age >= age){console.log(personB)}
}

filter(12, 'Ivan', 15, 'Asen', 9)