function airportStatistics(arr) {
    let plainsLended = {}
    let plainsDepart = {}
    let passengersPerCity = {}
    for (let flight of arr) {
        let flightTokens = flight.split(' ')
        let [planeID,town,passengersCount,action] = [flightTokens[0],flightTokens[1],flightTokens[2],flightTokens[3]]
        if (action === 'land'){
            if (!plainsLended.hasOwnProperty(planeID)){
                plainsLended[planeID] = {}
                plainsLended[planeID][town] = 1
                //passengersPerCity['lended'] = {}
                //passengersPerCity['lended'][town] = passengersCount
            }else if (plainsLended[planeID][town] === 0){
                plainsLended[planeID][town] = 1
            }
        }else if(action === 'depart'){
            if (plainsLended[planeID][town] && plainsLended[planeID][town] === 1){
                plainsLended[planeID][town] = 0
                //passengersPerCity['depart'][town] -= passengersCount
            }
        }

        //break
    }
    console.log(plainsLended)
    console.log(passengersPerCity)
}

airportStatistics([
        "Boeing474 Madrid 300 land",
        "AirForceOne WashingtonDC 178 land",
        "Airbus London 265 depart",
        "ATR72 WashingtonDC 272 land",
        "ATR72 Madrid 135 depart"
    ]
)