function solution(arr) {
    aggregate(arr,0,(a,b) => {return a + b})
    aggregate(arr,0,(a,b) => {return a + 1/b})
    aggregate(arr,'',(a,b) => {return a + b})
    function aggregate(arr,initValue,arrow) {
        for (let i = 0; i < arguments.length; i++) {
            initValue = arrow(initValue,arr[i])
        }
        console.log(initValue)
    }
}

solution([1,2,3])