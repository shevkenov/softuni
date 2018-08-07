function calcDistance(x1,y1,x2,y2) {
    let pointA = {x:x1,y:y1}
    let pointB = {x:x2,y:y2}
    let a = Math.max(pointA.y,pointB.y) - Math.min(pointA.y,pointB.y)
    let b = Math.max(pointA.x,pointB.x) - Math.min(pointA.x,pointB.x)
    let c = Math.sqrt(a * a + b * b)
    console.log(c)
}

calcDistance(2, 4, 5, 0)
calcDistance(2.34, 15.66, -13.55, -2.9985)