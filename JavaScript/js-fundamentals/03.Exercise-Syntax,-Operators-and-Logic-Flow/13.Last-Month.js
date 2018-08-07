function solution(arr) {
    let date = new Date(arr[2],arr[1]-1,1)
    let oneDay = 3600 * 24
    let newDate = new  Date(date.getTime() - oneDay)
    console.log(newDate.getDate())
}

function lastMonth(data) {
    let date = new Date(data[2],data[1]-1,0)
    console.log(date.getDate())
}

solution([17, 3, 2002])
solution([13, 12, 2004])