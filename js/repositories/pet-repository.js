import { Pet } from '../models/index.js';

export class PetRepository {
    localStoragePrefix = 'pets';

    /**
     * lista os pets cadastrados filtrando pelo id do proprietário
     * @param {string} owner_id
     */
    listByOwner(owner_id)
    {
        /** @var {Pet[]} pets **/
        const pets = DB.get(this.localStoragePrefix);

        return pets.filter(pet => pet.owner_id === owner_id);
    }

    /**
     * @param {Pet} pet
     * @return void
     */
    store(pet){
        DB.store(this.localStoragePrefix, pet);
    }
}