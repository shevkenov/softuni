function calcTriangleArea(a,b,c) {
    let sp = (a + b + c)/2
    let result = Math.sqrt(sp * (sp - a)*(sp - b)*(sp - c))
    console.log(result)
}

calcTriangleArea(2,3.5,4)