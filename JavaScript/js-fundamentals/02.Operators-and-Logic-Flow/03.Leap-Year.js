function isLeapYear(year) {
    let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    console.log(leap ? 'yes' : 'no')
}

isLeapYear(1900)
isLeapYear(1999)
isLeapYear(2000)