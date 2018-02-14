function messageFromMountain(bracket,text) {
    let messagePattern = new RegExp(`(${bracket})(.*?)(${bracket})`, 'g')
    let pattern = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi
    let message = messagePattern.exec(text)[2]
    let match = pattern.exec(text)
    let latitude = ''
    let longitude = ''
    while (match){
        if (match[1].toLowerCase() === 'north'){
            latitude = `${match[2]}.${match[4]} N`
        }else {
            longitude = `${match[2]}.${match[4]} E`
        }
        match = pattern.exec(text)
    }
    console.log(latitude)
    console.log(longitude)
    console.log('Message: ' + message)
}

messageFromMountain('<>','o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b')