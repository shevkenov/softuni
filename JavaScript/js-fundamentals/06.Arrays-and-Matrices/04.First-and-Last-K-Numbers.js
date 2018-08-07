function solution(arr) {
    let k = arr[0]
    let firstRow = arr.slice(1,1+k)
    let secondRow = arr.slice(-(k))
    console.log(firstRow.join(' '))
    console.log(secondRow.join(' '))
}

function firstLastKElements(arr) {
    let k = arr.shift();
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length-k,
        arr.length).join(' '));
}


solution([2, 7, 8, 9])
solution([3, 6, 7, 8, 9])