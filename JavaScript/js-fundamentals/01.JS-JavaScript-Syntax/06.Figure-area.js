function calcArea(a1,b1,a2,b2) {
    let [s1,s2,s] = [a1 * b1,a2 * b2,Math.min(a1,a2) * Math.min(b1,b2)]
    let result = s1 + s2 - s
    console.log(result)
}

calcArea(2, 4, 5, 3)
calcArea(13, 2, 5, 8)