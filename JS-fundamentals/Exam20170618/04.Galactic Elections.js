function election(arr) {
    let totalSum = 0
    let election = new Map()
    for (let obj of arr) {
        let systemName = obj.system
        let candidate = obj.candidate
        let votes = obj.votes
        totalSum += votes
        if (!election.has(systemName)){
            election.set(systemName,new Map())
        }
        if (!election.get(systemName).has(candidate)){
            election.get(systemName).set(candidate,0)
        }
        let sum = election.get(systemName).get(candidate) + votes
        election.get(systemName).set(candidate, sum)
    }
    
    let result = new Map()
    for (let [key,value] of election) {
        let sortedKey = Array.from(election.get(key).keys()).sort((a, b) => election.get(key).get(b) - election.get(key).get(a))[0]
        let sum = 0
        for (let [candidateKey,candidateValue] of value) {
            sum += election.get(key).get(candidateKey)
        }
        result.set(key,new Map())
        result.get(key).set(sortedKey,sum)
    }

    let resultSystem = new Map()
    let players = new Map()
    for (let [systemKey,systemValue] of result) {
        for (let [candidateKey,candidateValue] of systemValue) {
            if (!players.has(candidateKey)){
                players.set(candidateKey,0)
            }
            players.set(candidateKey,players.get(candidateKey)+candidateValue)
            if (!resultSystem.has(systemKey)){
                resultSystem.set(systemKey,candidateValue)
            }
        }
    }

    let sortedPlayers = Array.from(players.keys()).sort((a, b) => players.get(b) - players.get(a))
    let sortedParcentage = Array.from(players.values()).sort((a, b) => b - a).map(a => Math.floor(a/totalSum*100))
    if (sortedParcentage[0] > 50){
        if (sortedPlayers.length > 1){
            console.log(`${sortedPlayers[0]} wins with ${players.get(sortedPlayers[0])} votes`)
            console.log(`Runner up: ${sortedPlayers[1]}`)
            let sortedSystem = Array.from(resultSystem.keys()).sort((a, b) => resultSystem.get(b) - resultSystem.get(a))
            for (let i = 1; i < sortedSystem.length; i++) {
                console.log(`${sortedSystem[i]}: ${resultSystem.get(sortedSystem[i])}`)
            }
        }else {
            console.log(`${sortedPlayers[0]} wins with ${players.get(sortedPlayers[0])} votes`)
            console.log(`${sortedPlayers[0]} wins unopposed!`)
        }
    }else {
        console.log(`Runoff between ${sortedPlayers[0]} with ${sortedParcentage[0]}% and ${sortedPlayers[1]} with ${sortedParcentage[1]}%`)
    }
}

election([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]
)