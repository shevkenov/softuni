function numbers(num) {
    console.log('<ul>')
    for (let i = 1; i <= num; i++) {
        i % 2 !== 0 ? console.log('   <li><span style="color:green">' + i +'</span></li>') : console.log('   <li><span style="color:blue">' + i +'</span></li>')
    }
    console.log('</ul>')
}

numbers(10)