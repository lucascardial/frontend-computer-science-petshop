import {Specie} from '../models/index.js';

export class SpeciesRepository {
    /**
     * @return Specie[]
     */
    list(){
        return [
            { id: '1', name: 'gato' },
            { id: '2', name: 'cachorro' },
            { id: '3', name: 'ave' },
        ]
    }

    findById(id){
        return this.list().find(specie => specie.id === id);
    }
}