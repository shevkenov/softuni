function solution(arr) {
    return arr.filter(x => x % 2 === 0).join(" ")
}

console.log(solution([1,2,3,4,5,6,7,8]))