function countOccurences(word, str) {
    let startString = 0
    let count = 0
    while (true){
        let index = str.indexOf(word,startString)
        if(index < 0){
            break
        }
        count++
        startString = index + 1
    }
    console.log(count)
}
countOccurences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')