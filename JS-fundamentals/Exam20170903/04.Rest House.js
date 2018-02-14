function restHouse(rooms,guests) {
    let house = new Map()
    for (let currentRoom of rooms) {
        let beds = currentRoom.type === 'double-bedded' ? 2 : 3
        house.set(currentRoom.number,{type:currentRoom.type,emptyBeds:beds})
    }

    for (let couple of guests) {
        if (couple.first.gender !== couple.second.gender){
            for (let [key,value] of house) {
                if (value.type == 'double-bedded' && value.emptyBeds == 2){
                    value.guests = []
                    value.guests = [couple.first.name,couple.second.name]
                    value.emptyBeds = 0
                    break
                }
            }
        }else {
            for (let [key,value] of house) {
                if (value.type == 'triple' && value.emptyBeds > 1){
                    value.guests = []
                    value.guests = [couple.first.name,couple.second.name]
                    value.emptyBeds -= 2
                    break
                }
            }
        }
    }
    console.log(house)
}

restHouse([ { number: '206', type: 'double-bedded' },
        { number: '311', type: 'triple' } ],
    [ { first: { name: 'Tanya Popova', gender: 'female', age: 24 },
        second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } },
        { first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 } },
        { first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 } } ]
)