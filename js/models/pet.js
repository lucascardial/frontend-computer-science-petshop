export class Pet {
    /** @param {string} id */
    id;

    /** @param {string} owner_id */
    owner_id;
    /** @param {string} name */
    name;

    /** @param {string} age */
    age;

    /** @param {string} color*/
    color;

    constructor(data) {
        this.id = data.id;
        this.owner_id = data.owner_id;
        this.name = data.name;
        this.age = data.age;
        this.color = data.color;
    }
}