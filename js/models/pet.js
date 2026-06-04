export class Pet {
    /** @param {string} id */
    id;

    /** @param {string} owner_id */
    owner_id;

    /** @param {string} name */
    name;

    /** @param {string} specie_id */
    specie_id;

    /** @param {string} age */
    age;

    /** @param {string} color*/
    color;

    /**
     *
     * @param {{ id: string, owner_id: string, name: string, specie_id: string, name, specie_id: string, age: number, color: string}} data
     */
    constructor(data) {
        this.id = data.id;

        if(! this.id) {
            this.id = crypto.randomUUID();
        }

        this.owner_id = data.owner_id;
        this.name = data.name;
        this.specie_id = data.specie_id;
        this.age = data.age;
        this.color = data.color;
    }
}