function tempateFormat(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>')
    console.log("<quiz>")
    for (let i = 0; i < input.length; i++) {
        let textType = returnText(i,input[i])
        console.log(textType)
    }
    console.log("</quiz>")
    function returnText(n,text) {
        text += "\n"
        if(n % 2 === 0){
            return `  <question>\n    ${text}  </question>`
        }else {
            return `  <answer>\n     ${text}  </answer>`
        }
    }
}
tempateFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"])
tempateFormat(["Dry ice is a frozen form of which gas?", "Carbon Dioxide",
    "What is the brightest star in the night sky?", "Sirius"])