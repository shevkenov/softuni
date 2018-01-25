function playWithNumbers(input){
    let initialNumber = input[0]
    for (let i = 1; i < input.length; i++) {
        initialNumber = action(input[i],initialNumber)
        console.log(initialNumber)
    }

    function action(word, number) {
        switch (word){
            case "chop": return (number / 2)
            case "dice": return (Math.sqrt(number))
            case "spice": return (number + 1)
            case "bake": return (number * 3)
            case "fillet": return (number - (number * 0.2))
        }
    }
}
playWithNumbers([32, "chop", "chop", "chop", "chop", "chop"])
playWithNumbers([9, "dice", "spice", "chop", "bake", "fillet"])
