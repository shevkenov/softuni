function employData(str) {
    let regex = /^([A-Z][A-Za-z]+)\s-\s([1-9][0-9]+)\s-\s([a-zA-Z0-9 -]+)$/gm

        let match = regex.exec(str)
        while(match){
            console.log(`Name: ${match[1]}`)
            console.log(`Position: ${match[3]}\n`)
            console.log(`Salary: ${match[2]}`)
            match = regex.exec(str)
        }
}
employData('Isacc - 1000 - CEO\n' +
    'Ivan - 500 - Employee\n' +
    'Peter - 500 - Employee\n')