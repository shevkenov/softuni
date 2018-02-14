function carCompanyRegister(arr) {
    let catalogue = {}

    for (let str of arr) {
        let[carBrand,carModel,producedCars] = str.split('|').filter(s => s !== '').map(s => s.trim())

        if (!catalogue.hasOwnProperty(carBrand)){
            catalogue[carBrand] = new Object()
        }
        if (!catalogue[carBrand].hasOwnProperty(carModel)){
            catalogue[carBrand][carModel] = Number(0)
        }
        catalogue[carBrand][carModel] += Number(producedCars)
    }

    for (let brand in catalogue) {
        console.log(brand)
        for (let model in catalogue[brand]) {
            console.log(`###${model} -> ${catalogue[brand][model]}`)
        }
    }
}

carCompanyRegister(['Mercedes-Benz | 50PS | 123' ,
'Mini | Clubman | 20000' ,
'Mini | Convertible | 1000' ,
'Mercedes-Benz | 60PS | 3000' ,
'Hyunday | Elantra GT | 20000' ,
'Mini | Countryman | 100' ,
'Mercedes-Benz | W210 | 100' ,
'Mini | Clubman | 1000' ,
'Mercedes-Benz | W163 | 200'])