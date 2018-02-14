function jsonTable(arr) {
    let result = '<table>\n'

    for (let str of arr) {
        let employ = JSON.parse(str)
        result += `\t<tr>\n\t\t<td>${escapeChars(employ.name)}</td>\n\t\t<td>${escapeChars(employ.position)}</td>\n\t\t<td>${Number(employ.salary)}</td>\n`
        result += '\t<tr>\n'
    }

    result += '</table>'
    console.log(result)

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;')
    }
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])