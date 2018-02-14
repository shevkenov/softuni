function election(arr) {
    let sum1 = 0
    let election = {}
    for (let obj of arr) {
        let systemName = obj.system
        let candidate = obj.candidate
        let votes = obj.votes
        sum1 += votes
        if (!election.hasOwnProperty(systemName)){
            election[systemName] = {}
        }
        if (!election[systemName].hasOwnProperty(candidate)){
            election[systemName][candidate] = 0
        }
        election[systemName][candidate] += votes
    }

    let result = {}
    for (let obj in election) {
        let sortedKeys = Object.keys(election[obj]).sort((a,b) => election[obj][b] - election[obj][a])[0]
        result[obj] = {}
        let sum = 0
        for (let candidate in election[obj]) {
            sum += election[obj][candidate]
        }
        result[obj]['candidate'] = sortedKeys
        result[obj]['votes'] = sum
    }

    let players = {}
    for (let system in result) {
            if(!players.hasOwnProperty(result[system]['candidate'])){
                players[result[system]['candidate']] = 0
            }
            players[result[system]['candidate']] += result[system]['votes']
    }

    let sortedPlayers = Object.keys(players).sort((a,b)=> players[b] - players[a])
    let sortedPercentage = Object.values(players).sort((a,b)=> b - a).map(a => Math.floor((a / sum1)*100))
    let sortedSystem = Object.keys(result).sort((a,b)=> result[b]['votes'] - result[a]['votes'])
    if ( sortedPercentage[0] > 50){
        if (sortedPlayers.length > 1){
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`)
            console.log(`Runner up: ${sortedPlayers[1]}`)
            for (let i = 1; i < sortedSystem.length; i++){
                console.log(`${sortedSystem[i]}: ${result[sortedSystem[i]]['votes']}`)
            }
        }else {
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`)
            console.log(`${sortedPlayers[0]} wins unopposed!`)
        }

    }else {
        console.log(`Runoff between ${sortedPlayers[0]} with ${sortedPercentage[0]}% and ${sortedPlayers[1]} with ${sortedPercentage[1]}%`)
    }
    //console.log(players)
}

election([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
)