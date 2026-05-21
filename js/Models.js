import { Helpers} from "./helpers.js";

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
            this.name = data.name;
            this.email = data.email;
            this.password = data.password;

            this.id = crypto.randomUUID()

            if(! Helpers.isStringValida(data.password)) {
                alert('A senha deve conter no mínimo 4 dígitos!')
                throw new Error('Password is required');
            }
        }
    }

    window.Models = {
        User: User,
    }
})()