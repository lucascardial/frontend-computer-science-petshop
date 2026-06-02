import {Helpers} from "../helpers.js";

export class User {
    /** @property {string} id*/
    id;

    /** @property {string} name*/
    name;

    /** @property {string} name*/
    cpf;

    /** @property {string} name*/
    phoneNumber;

    /** @property {string} email **/
    email;

    /** @property {string} password **/
    password;

    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.cpf = data.cpf;
        this.phoneNumber = data.phoneNumber;
        this.password = data.password;

        this.id = crypto.randomUUID()

        if(! Helpers.isStringValida(data.password) || data.password.length < 4) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'A senha deve conter no mínimo 4 dígitos!',
            });
            throw new Error('Password is required');
        }
    }
}