function radar(arr) {
    let [speed, area] = [arr[0], arr[1]]


    function allowedSpeed(area) {
        switch (area){
            case 'city': return 50
            case 'residential': return 20
            case 'motorway': return 130
            case 'interstate': return 90
        }
    }
    
    function getInfraction(currentSpeed,limit) {
        let overSpeed = currentSpeed - limit
        if (overSpeed <= 0){
            return false
        }else{
            if (overSpeed <= 20){
                return 'speeding'
            }else if(overSpeed <= 40){
                return 'excessive speeding'
            }else {
                return 'reckless driving'
            }
        }
    }

    let infraction = getInfraction(speed,allowedSpeed(area))
    if (infraction){
        console.log(infraction)
    }
}

radar([21, 'residential'])
radar([40, 'city'])
radar([120, 'interstate'])
radar([200, 'motorway'])