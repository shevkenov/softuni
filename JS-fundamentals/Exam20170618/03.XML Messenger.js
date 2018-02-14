function checkMessage(str) {
    let pattern = /^<message((?:\s+[a-z]+="[A-Za-z0-9 .]+"\s*?)*)>((?:.|\n)+?)<\/message>$/
    let tokens = pattern.exec(str)
    if (!tokens){
        console.log('Invalid message format')
        return
    }
    let [match, attrib, body] = tokens

    let recipient = ''
    let sender = ''
    let atrribPattern = /\s+([a-z]+)="([A-Za-z0-9 .]+)"\s*?/g
    let attribMatches = atrribPattern.exec(attrib)
    while (attribMatches){
        if (attribMatches[1] == 'to'){
            recipient = attribMatches[2]
        }else if(attribMatches[1] == 'from'){
            sender = attribMatches[2]
        }
        attribMatches = atrribPattern.exec(attrib)
    }
    if (sender === '' || recipient === ''){
        console.log('Missing attributes')
        return
    }
    let html = `<article>\n  <div>From: <span class="sender">${sender}</span></div>\n`
    html += `  <div>To: <span class="recipient">${recipient}</span></div>\n`
    html += `  <div>\n    <p>${body}</p>\n  </div>\n</article>`
    console.log(html)
}

checkMessage('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>')