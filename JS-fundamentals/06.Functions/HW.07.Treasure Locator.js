function treasureLocation(input) {
    let tokelau = (a,b) => a >= 8 && a <= 9 && b >= 0 && b <= 1
    let tuvalu = (a,b) => a >= 1 && a <= 3 && b >= 1 && b <= 3
    let samoa = (a,b) => a >= 5 && a <= 7 && b >= 3 && b <= 6
    let tonga = (a,b) => a >= 0 && a <= 2 && b >= 6 && b <= 8
    let cook = (a,b) => a >= 4 && a <= 9 && b >= 7 && b <= 8
    for (let i = 0; i < input.length; i+=2) {
        let [x,y] = [input[i],input[i+1]].map(Number)
        if(tokelau(x,y)){
            console.log("Tokelau")
        }else if(tuvalu(x,y)){
            console.log("Tuvalu")
        }else if(samoa(x,y)){
            console.log("Samoa")
        }else if(tonga(x,y)){
            console.log("Tonga")
        }else if(cook(x,y)){
            console.log("Cook")
        }else {
            console.log("On the bottom of the ocean")
        }
    }
}
treasureLocation([4, 2, 1.5, 6.5, 1, 3]);
treasureLocation([6, 4]);