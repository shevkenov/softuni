function isInsideVolume(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        let [x,y,z] = [arr[i],arr[i+1],arr[i+2]]
        if (inVolume(x,y,z)){
            console.log("inside");
        }else {
            console.log("outside");
        }
    }
    function inVolume(x,y,z) {
        let [x1,x2] = [10,50]
        let [y1,y2] = [20,80]
        let [z1,z2] = [15,50]
        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                if(z >= z1 && z <= z2){
                    return true
                }
            }
        }
        return false
    }
}

isInsideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]
)