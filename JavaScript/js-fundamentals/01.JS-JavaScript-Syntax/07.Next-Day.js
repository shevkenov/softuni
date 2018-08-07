function showNextDay(yr,mnt,day) {
    let date = new Date(yr,mnt-1,day)
    let oneDay = 60 * 60 * 24 * 1000
    let nextDate = new Date(date.getTime() + oneDay)
    return nextDate.getFullYear() + '-' + (nextDate.getMonth()+1) + '-' + nextDate.getDate()
    return date
}

console.log(showNextDay(2016, 9, 30))