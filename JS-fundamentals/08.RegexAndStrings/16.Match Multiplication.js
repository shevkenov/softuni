function matchMultiplication(str) {
    str = str.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match,group1,group2) => Number(group1) * Number(group2))
    console.log(str)
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')