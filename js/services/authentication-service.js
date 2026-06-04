import {UserRepository} from "../repositories/index.js";
import {LocalStorageService} from "./localstorage-service.js";
import {User} from "../models/index.js";

export class AuthenticationService {
    /**@param {UserRepository}  userRepository**/
    userRepository;

    /**@param {LocalStorageService} localStorageService**/
    localStorageService;

    /**
     *
     * @param {UserRepository} userRepository
     * @param {LocalStorageService} localStorageService
     */
    constructor(userRepository, localStorageService) {
        this.userRepository = userRepository;
        this.localStorageService = localStorageService;
    }

    login(email, password) {
        const user = this.userRepository.findByEmail(email);

        if(user === null) {
            return false;
        }

        if(user.password !== password) {
            return false;
        }

        localStorage.setItem('user_session', JSON.stringify(user));

        return true;
    }

    signup(User) {
        this.userRepository.save(User)
    }

    logout() {
        this.localStorageService.remove('user_session');
    }

    /**
     * @returns {User}
     *
     * @throws Error lança um erro caso não exista uma sessão de usuário
     */
    getAuthenticatedUser() {
        const user = this.localStorageService.get('user_session')
        console.log(user)

        if(! user.id) {
            throw new Error('No user session found');
        }

        return user;
    }
}