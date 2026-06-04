import { Pet } from '../models';
import {LocalStorageService, AuthenticationService} from '../services';

export class PetRepository {
    localStoragePrefix = 'pets';
    /**@param {LocalStorageService} localStorageService**/
    localStorageService;
     /**@param {AuthenticationService} authService **/
    authService

    /**
     *
     * @param {LocalStorageService}  localStorgeService
     * @param {AuthenticationService} authService
     */
    constructor(localStorgeService, authService) {
        this.localStorageService = localStorgeService;
        this.authService = authService;
    }

    /**
     *
     * @return {Pet[]}
     */
    list()
    {
        const user = this.authService.getAuthenticatedUser();

        /** @var {Pet[]} pets **/
        const pets = this.localStorageService.get(this.localStoragePrefix);

        return pets.filter(pet => pet.owner_id === user.id);
    }

    /**
     * @param {Pet} dado
     * @return void
     */
    save(dado){
        const user = this.authService.getAuthenticatedUser();
        dado.owner_id = user.id;

        this.localStorageService.save(this.localStoragePrefix, dado);
    }
}