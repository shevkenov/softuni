function solution(arr) {
    let num = Number(arr[0])
    for (let i = 1; i < arr.length; i++) {
        num = op(num,arr[i])
        console.log(num)
    }

    function op(number, action) {
        switch (action){
            case 'chop': return number / 2
            case 'dice': return Math.sqrt(number)
            case 'spice': return number + 1
            case 'bake': return number * 3
            case 'fillet': return number - (number * 0.2)
        }
    }
}

solution([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
solution([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])