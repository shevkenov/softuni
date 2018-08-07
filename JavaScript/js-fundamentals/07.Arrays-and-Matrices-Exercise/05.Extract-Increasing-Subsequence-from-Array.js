function solution(arr) {
    let currentElement = arr[0]
    console.log(arr.filter(function (el) {
        if(el >= currentElement){
            currentElement = el
            return true
        }
    }).join('\n'));
}

solution([1,3,8,4,10,12,3,2,24,])