function componentsRegister(arr) {
    let catalogue = new Map()
    for (let str of arr) {
        let [systemName,componentName,subcomponentName] = str.split('|').filter(s => s !== '').map(s => s.trim())

        if (!catalogue.has(systemName)){
            catalogue.set(systemName,new Map())
        }
        if (!catalogue.get(systemName).has(componentName)){
            catalogue.get(systemName).set(componentName,[])
        }
        catalogue.get(systemName).get(componentName).push(subcomponentName)
    }

    for (let system of Array.from(catalogue.keys()).sort((a,b) => sortMap(a,b))) {
        console.log(system)
        for (let component of Array.from(catalogue.get(system).keys()).sort((a,b) => catalogue.get(system).get(b).length - catalogue.get(system).get(a).length)) {
            console.log('|||' + component)
            catalogue.get(system).get(component).forEach(sub => console.log(`||||||${sub}`))
        }
    }
    //console.log(catalogue)
    function sortMap(a,b) {
        if (catalogue.get(a).size === catalogue.get(b)){
            return catalogue.get(a) - catalogue.get(b)
        }else {
            return catalogue.get(b).size - catalogue.get(a).size
        }
    }
}

componentsRegister(['SULS | Main Site | Home Page' ,
'SULS | Main Site | Login Page' ,
'SULS | Main Site | Register Page' ,
'SULS | Judge Site | Login Page' ,
'SULS | Judge Site | Submittion Page' ,
'Lambda | CoreA | A23' ,
'SULS | Digital Site | Login Page' ,
'Lambda | CoreB | B24' ,
'Lambda | CoreA | A24' ,
'Lambda | CoreA | A25' ,
'Lambda | CoreC | C4' ,
'Indice | Session | Default Storage' ,
'Indice | Session | Default Security'])