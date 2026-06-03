export class Specie {
    /** @param {string} id */
    id;

    /** @param {string} name */
    name;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }
}