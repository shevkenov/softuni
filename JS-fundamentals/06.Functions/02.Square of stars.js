console.log("02.Square of Stars")
function printSquareOfStars(n = 5) {
    for(let i = 1; i <= n; i++){
        console.log("* ".repeat(n))
    }
}
printSquareOfStars()