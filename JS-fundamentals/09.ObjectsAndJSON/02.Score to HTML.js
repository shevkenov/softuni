function createTable(str) {
    let arr = JSON.parse(str)
    let keys = Object.keys(arr[0])
    let table = `<table>\n <tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>`
    for (let obj of arr) {
        table += `\n <tr><td>${escapeChars(obj[keys[0]]+'')}</td><td>${escapeChars(obj[keys[1]]+'')}</td></tr>`
    }
    table += '\n</table>'
    console.log(table)

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;')
    }
}

createTable('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')