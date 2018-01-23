function dayOfWeek(name) {
    let dayName = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    let index = dayName.indexOf(name.toLowerCase())
    return index > -1 ? index + 1 : console.log("error")
}

console.log(dayOfWeek("Monday"))