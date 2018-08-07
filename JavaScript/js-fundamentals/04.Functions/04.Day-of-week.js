function printDayOfWeek(nameday) {
    let weekDaysArr = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    for (let no in weekDaysArr) {
        if (weekDaysArr[no] === nameday.toLowerCase()){
            return Number(no)+1
        }
    }
    return 'error'
}

function dayOfWeek(name) {
    let dayName = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    let index = dayName.indexOf(name.toLowerCase())
    return index > -1 ? index + 1 : console.log("error")
}

console.log(printDayOfWeek('monday'));
console.log(printDayOfWeek('friday'));
console.log(printDayOfWeek('Friday'));