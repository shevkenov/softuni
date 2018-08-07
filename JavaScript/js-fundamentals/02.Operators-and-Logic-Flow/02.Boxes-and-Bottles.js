function calcBoxes(bottles,boxCapacity) {
    let boxes = Math.ceil(bottles/boxCapacity)
    console.log(boxes)
}

calcBoxes(20,6)
calcBoxes(15,7)
calcBoxes(5,10)