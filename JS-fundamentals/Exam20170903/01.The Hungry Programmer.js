function hungryProgrammer(meals,commands) {
    let mealsEaten = 0
    let actions = {
        Serve: ()=>{ if(meals.length>1) console.log(`${meals.pop()} served!`)},
        Add: ([meal])=>{if(meal != '') meals.unshift(meal)},
        Shift: ([startInx,endIndex])=>{
            let areInxValid = startInx && endIndex && startInx >= 0 && endIndex < meals.length
            if (areInxValid){
                let tempEl = meals[startInx]
                meals[startInx] = meals[endIndex]
                meals[endIndex] = tempEl
            }
        },
        Eat: ()=> {if (meals.length>1) console.log(`${meals.shift()} eaten`)
            mealsEaten++
        },
        Consume: ([startInx,endIndex])=> {
            let areInxValid = startInx && endIndex && startInx >= 0 && endIndex < meals.length && startInx < endIndex
            if (areInxValid){
                let portionsEaten = endIndex - startInx + 1
                mealsEaten += portionsEaten
                meals.splice(startInx,portionsEaten)
                console.log('Burp!')
            }
        },
        End: ()=> {if (meals.length > 0) {console.log('Meals left: ' + meals.join(', '))} else {console.log('The food is gone')}
            console.log('Meals eaten: ' + mealsEaten)
        }
    }
    for (let commandArgs of commands) {
        let commandParams = commandArgs.split(' ')
        let command = commandParams.shift()
        if (actions[command]){
            actions[command](commandParams)
            if (command === 'End'){
                break
            }
        }
    }
}


hungryProgrammer(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti', 'Shift 0 1', 'Consume 1 4', 'End'])
hungryProgrammer(['carrots', 'apple', 'beet'],['Consume 0 2', 'End'])