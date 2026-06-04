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

    /**
     * @param {{ id: string, name: string, email: string, cpf: string, phoneNumber: string, password: string }} data
     **/
    constructor(data) {
        this.id = data.id;

        if(!this.id) {
            this.id = crypto.randomUUID();
        }

        this.name = data.name;
        this.email = data.email;
        this.cpf = data.cpf;
        this.phoneNumber = data.phoneNumber;
        this.password = data.password;

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