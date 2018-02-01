function username(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let email = arr[i];
        let emailData = email.split('@')
        let name = emailData[0]
        let domain = ''
        emailData[1].split('.').map(el => domain+=el[0])
        result.push(name + '.' + domain)
    }
    console.log(result.join(', '))
}

username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])