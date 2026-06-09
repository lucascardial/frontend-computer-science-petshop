export class UserService {
    id
    user_id;
    services;

    constructor(data) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.services = data.services;

        if(! this.id) {
            this.id = crypto.randomUUID();
        }

        if(! this.services.length) {
            this.services = [];
        }
    }

    /**
     *
     * @param {{service_id: string, pet_id: string}} data
     */
    addService(data) {
        this.services.push(data);
    }
}