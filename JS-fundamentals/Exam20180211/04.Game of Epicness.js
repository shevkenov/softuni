function winnerOfGames(arrOfKingdom,matrixOfStr) {
    let resultOfKingdom = {}
    for (let kingdom of arrOfKingdom) {
        let [kingdomName,generalName,army] = [kingdom.kingdom,kingdom.general,Number(kingdom.army)]
        if (!resultOfKingdom.hasOwnProperty(kingdomName)){
            resultOfKingdom[kingdomName] = {}
        }
        if (!resultOfKingdom[kingdomName].hasOwnProperty(generalName)){
            resultOfKingdom[kingdomName][generalName] = 0
        }
        resultOfKingdom[kingdomName][generalName] += army
    }

    let winnerKingdom = {}
    let winnerGeneral = {}
    for (let battle of matrixOfStr) {
        let [attackingKingdom,attackingGeneral,defendingKingdom,defendingGeneral] = [battle[0],battle[1],battle[2],battle[3]]
        if (attackingKingdom !== defendingKingdom){
            let resultAttacking = resultOfKingdom[attackingKingdom][attackingGeneral] - resultOfKingdom[defendingKingdom][defendingGeneral]
            if (resultAttacking !== 0){
                if (!winnerGeneral.hasOwnProperty(defendingGeneral)){
                    winnerGeneral[defendingGeneral] = {}
                    winnerGeneral[defendingGeneral]['wins'] = 0
                    winnerGeneral[defendingGeneral]['loses'] = 0
                }
                if (!winnerGeneral.hasOwnProperty(attackingGeneral)){
                    winnerGeneral[attackingGeneral] = {}
                    winnerGeneral[attackingGeneral]['wins'] = 0
                    winnerGeneral[attackingGeneral]['loses'] = 0
                }
                if (!winnerKingdom.hasOwnProperty(defendingKingdom)){
                    winnerKingdom[defendingKingdom]={}
                    winnerKingdom[defendingKingdom]['wins'] = 0
                    winnerKingdom[defendingKingdom]['loses'] = 0
                }
                if (!winnerKingdom.hasOwnProperty(attackingKingdom)){
                    winnerKingdom[attackingKingdom]={}
                    winnerKingdom[attackingKingdom]['wins'] = 0
                    winnerKingdom[attackingKingdom]['loses'] = 0
                }
                if (resultAttacking < 0){
                    let winnerArmy = Number(resultOfKingdom[defendingKingdom][defendingGeneral])
                    let losesArmy = Number(resultOfKingdom[attackingKingdom][attackingGeneral])
                    resultOfKingdom[defendingKingdom][defendingGeneral] += winnerArmy * 0.1
                    resultOfKingdom[attackingKingdom][attackingGeneral] -= losesArmy * 0.1

                    winnerKingdom[defendingKingdom]['wins']++
                    winnerKingdom[attackingKingdom]['loses']++
                    winnerGeneral[defendingGeneral]['wins']++
                    winnerGeneral[attackingGeneral]['loses']++

                }else if(resultAttacking > 0){
                    let winnerArmy = Number(resultOfKingdom[attackingKingdom][attackingGeneral])
                    let lossesArmy = Number(resultOfKingdom[defendingKingdom][defendingGeneral])
                    resultOfKingdom[attackingKingdom][attackingGeneral] += winnerArmy * 0.1
                    resultOfKingdom[defendingKingdom][defendingGeneral] -= lossesArmy * 0.1

                    winnerKingdom[attackingKingdom]['wins']++
                    winnerKingdom[defendingKingdom]['loses']++
                    winnerGeneral[attackingGeneral]['wins']++
                    winnerGeneral[defendingGeneral]['loses']++
                }
            }
        }
    }
    if (Object.keys(winnerKingdom).length !== 0){
        console.log(winnerKingdom)
    }
    for (let general in resultOfKingdom[winnerKingdomArray]) {
        for (let obj in winnerGeneral) {
                if (obj === general){
                    resultWinner[general] = winnerGeneral[obj]
                    let winnerKingdomArray = Object.keys(winnerKingdom).sort((a, b) => sortArray(winnerKingdom['wins'],winnerKingdom['wins']))
                    if (winnerKingdom>1){
                        }
                        //console.log(winnerKingdomArray)
                    // let resultWinner = {}
                }
            }
        }
        if (winnerKingdomArray !== undefined ){
            let resultWinnerArray = Object.keys(resultOfKingdom[winnerKingdomArray]).sort((a, b) => resultOfKingdom[winnerKingdomArray][b] - resultOfKingdom[winnerKingdomArray][a])
            console.log('Winner: ' + winnerKingdomArray)
            for (let general of resultWinnerArray) {
                console.log(`/\\general: ${general}` )
                console.log(`---army: ${Math.floor(resultOfKingdom[winnerKingdomArray][general])}`)
                console.log(`---wins: ${resultWinner[general]['wins']}`)
                console.log(`---losses: ${resultWinner[general]['loses']}`)
            }
        }
    function sortArray(a,b){
        if (a - b === 0){
            return b
        }else if (a-b === -1){
            return b
        }
    }
}

// winnerOfGames([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//         { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//         { kingdom: "Stonegate", general: "Doran", army: 70000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
//         { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Stonegate", "Ulric", "Stonegate", "Doran"],
//         ["Stonegate", "Doran", "Maiden Way", "Merek"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"],
//         ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
// )
// winnerOfGames([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//         { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
// )
winnerOfGames([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
)