function rounding1(arr) {
    let [num,precision] = [arr[0], arr[1]]
    let result = 0
    if (num.toString().split('.')[1].length <= precision){
        result = num
    }else {
        result = num.toFixed(precision)
    }
    console.log(result)
}

function rounding(nums) {
    let [n, d] = [Number(nums[0]),nums[1]]
    if (d > 15){
        d = 15
    }
    console.log(Number(n.toFixed(d)))
}

rounding([3.1415926535897932384626433832795, 2])
rounding([10.5, 3])