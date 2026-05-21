function test() {
    var user = new Models.User({
        name: 'test',
        id: '123',
        email: 'user@mail.com',
        password: 'password',
    })

    Repositories.User.salvarUsuario(user)

}

test();