function findTreasure(arr) {
    for (let i = 0; i < arr.length; i+=2) {
        console.log(showLocation(Number(arr[i]), Number(arr[i + 1])));
    }

    function showLocation(x,y) {
        if (x >= 1 && x <= 3 && y >= 1 && y <= 3){
            return 'Tuvalu'
        }else if (x >= 8 && x <= 9 && y >= 0 && y <= 1){
            return 'Tokelau'
        }else if (x >= 5 && x <= 7 && y >= 3 && y <= 6){
            return 'Samoa'
        }else if (x >= 0 && x <= 2 && y >= 6 && y <= 8){
            return 'Tonga'
        }else if (x >= 4 && x <= 9 && y >= 7 && y <= 8){
            return 'Cook'
        }else {
            return 'On the bottom of the ocean'
        }
    }
}

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

findTreasure([4, 2, 1.5, 6.5, 1, 3])
findTreasure([6, 4])