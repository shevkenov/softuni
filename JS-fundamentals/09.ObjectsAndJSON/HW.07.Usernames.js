function catalogueOfUsernames(arr) {
    let usernames = new Set()
    for (let str of arr) {
        usernames.add(str.trim())
    }
    for (let name of Array.from(usernames).sort((a,b) => sortUsernames(a,b))) {
        console.log(name)
    }

    function sortUsernames(a,b) {
        if (a.length == b.length){
            return a.localeCompare(b)
        }else {
            return a.length - b.length
        }
    }
}
catalogueOfUsernames(['Denise' ,
'Ignatius' ,
'Iris' ,
'Isacc' ,
'Indie' ,
'Dean' ,
'Donatello' ,
'Enfuego' ,
'Benjamin' ,
'Biser' ,
'Bounty' ,
'Renard' ,
'Rot'])