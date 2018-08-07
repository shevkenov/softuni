function calcCone(r,h) {
    let v = (1/3) * Math.PI * r * r * h
    let height = Math.sqrt(r * r + h * h)
    let area = Math.PI * r * (r + height)
    console.log('volume = ' + v)
    console.log('area = ' + area)
}

calcCone(3,5)
calcCone(3.3,7.8)