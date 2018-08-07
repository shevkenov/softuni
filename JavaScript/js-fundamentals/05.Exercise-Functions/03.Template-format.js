function template(arr) {
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n'
    for (let i = 0; i < arr.length; i+=2) {
        result += question(arr[i])
        result += answer(arr[i+1])
    }

    function question(str) {
        return ' <question>\n  ' + str + '\n </question>\n'
    }
    function answer(str) {
        return ' <answer>\n  ' + str + '\n </answer>\n'
    }
    console.log(result + '</quiz>')
}

template(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
)