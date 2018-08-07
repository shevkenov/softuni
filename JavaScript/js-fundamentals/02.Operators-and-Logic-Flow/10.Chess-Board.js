function drawChessboard(n) {
    console.log('<div class="chessboard">')
    for (let i = 1; i <= n; i++) {
        console.log(' <div>')
        for (let j = 1; j <= n; j++) {
            let color = (i + j) % 2 === 0 ? 'black' : 'white'
            console.log(`  <span class="${color}"></span>`)
        }
        console.log(' </div>')
    }
    console.log('</div>')
}

drawChessboard(3)