function table(num) {
    let result = '<table border="1">\n'
    result += " <tr><th>x</th>"
    for (let i = 1; i <= num; i++) {
        result += `<th>${i}</th>`
    }
    result += '</tr>\n'
    for (let i = 1; i <= num; i++) {
        result += ` <tr><th>${i}</th>`
        let k = i
        for (let j = 1; j <= num; j++) {
            result += `<td>${k}</td>`
            k += i
        }
        result += '</tr>\n'
    }
    result += '</table>'
    console.log(result)
}

table(5)