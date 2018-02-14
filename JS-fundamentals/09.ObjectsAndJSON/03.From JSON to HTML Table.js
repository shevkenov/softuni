function htmlTableFromJSON(str) {
    let arr = JSON.parse(str)
    let keys = Object.keys(arr[0])
    let html = '<table>\n <tr>'
    for (let key of keys) {
        html += `<th>${key}</th>`
    }
    html += '</tr>\n'
    for (let obj of arr) {
        html += ' <tr>'
        for (let key of keys) {
            html += `<td>${escapeChars(obj[key]+'')}</td>`
        }
        html += '</tr>\n'
    }
    html += '</table>'
    console.log(html)

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;')
    }
}

htmlTableFromJSON('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')
htmlTableFromJSON('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')