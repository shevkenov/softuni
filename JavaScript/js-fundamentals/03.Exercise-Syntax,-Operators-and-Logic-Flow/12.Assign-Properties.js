function solutin(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i+=2) {
        obj[arr[i]] = arr[i+1]
    }
    console.log(obj)
}

solutin(['name', 'Pesho', 'age', '23', 'gender', 'male'])
solutin(['ssid', '90127461', 'status', 'admin', 'expires', '600'])