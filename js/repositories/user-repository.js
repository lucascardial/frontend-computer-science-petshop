import {User} from '../models/index.js';

export class UserRepository
{
    localStoragePrefix = 'users';
    /**@param {LocalStorageService} localStorageService **/
    localStorageService;

    constructor(localStorageService) {
        this.localStorageService = localStorageService
    }

    findByEmail(email)
    {
        const users =  this.localStorageService.get(this.localStoragePrefix);

        if(users === null) {
            return null;
        }

        const user = users.find((user) => user.email === email);

        return user ? new User(user) : null;
    }

    /**
     *
     * @param {User} user
     */
    save(user) {
        const emailExists = this.findByEmail(user.email);
        if(emailExists !== null) {
            alert('email em uso!')
            return;
        }

        return this.localStorageService.save(this.localStoragePrefix, user);
    }
}