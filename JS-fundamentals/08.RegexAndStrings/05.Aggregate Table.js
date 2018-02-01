function aggregateTable(arr) {
    let towns = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        let townData = str.split('|').filter(a => a !== '')
        let name = townData[0].trim()
        let income = Number(townData[1])
        towns.push(name)
        sum += income
    }
    console.log(towns.join(', '))
    console.log(sum)
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)