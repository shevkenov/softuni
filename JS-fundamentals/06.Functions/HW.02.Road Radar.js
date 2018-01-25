function roadRadar(input) {
    let [speed,area] = [input[0],input[1]]
    let limit = getZone(area)
    let infraction = isSpeedinLimit(speed,limit)
    if(infraction){
        console.log(infraction)
    }else {
        console.log()
    }

    function getZone(area) {
        switch (area){
            case "motorway": return 130
            case  "interstate": return 90
            case  "city": return 50
            case  "residential": return 20
        }
    }

    function isSpeedinLimit(speed,limit) {
        let speedOverLimit = speed - limit
        if (speedOverLimit <= 0){
            return false
        }else{
            if(speedOverLimit <= 20){
                return "speeding"
            }else if(speedOverLimit <= 40){
                return "excessive speeding"
            }else {
                return "reckless driving"
            }
        }
    }
}
roadRadar([21, "residential"])
roadRadar([120, "interstate"])
roadRadar([200, "motorway"])
roadRadar([100, "motorway"])
