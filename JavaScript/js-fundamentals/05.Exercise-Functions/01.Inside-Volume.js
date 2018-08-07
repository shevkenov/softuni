function isPointInsideVolume(arr){
    for (let i = 0; i < arr.length; i+=3) {
        let x = arr[i]
        let y = arr[i + 1]
        let z = arr[i + 2]
        console.log(checkPoint(x, y, z));
    }

    function checkPoint(x,y,z) {
        if (x >= 10 && x <= 50 && y >= 20 && y <= 80 && z >= 15 && z <= 50){
            return 'inside'
        }
        return 'outside'
    }
}

isPointInsideVolume([8, 20, 22])
isPointInsideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43])