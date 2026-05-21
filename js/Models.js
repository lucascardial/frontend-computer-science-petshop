(function () {
    class User {
        /** @property {string} id*/
        id;

        /** @property {string} name*/
        name;

        /** @property {string} email **/
        email;

        /** @property {string} password **/
        password;

        constructor(data) {
            this.id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.password = data.password;
        }
    }

    window.Models = {
        User: User,
    }
})()