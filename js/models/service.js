export class Service {
    /** @param {string} id **/
    id;

    /** @param {string} name **/
    name;

    /** @param {number} price **/
    price;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
    }
}