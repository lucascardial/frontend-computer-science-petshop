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

        const user =  localStorage.getItem('user_session');
        if (user) {
            sessionStorage.setItem('user',user);
        }
    }

    login(email, password, remember = false) {
        return new Promise((resolve, reject) => {
            const user = this.userRepository.findByEmail(email);

            if(user === null) {
                reject(false);
                return;
            }

            if(user.password !== password) {
                reject(false);
                return;
            }

            sessionStorage.setItem('user', JSON.stringify(user));

            if(remember) {
                localStorage.setItem('user_session', JSON.stringify(user));
            }

            const loggedInEvent = new CustomEvent("userLoggedIn", {
                detail: user
            });

            window.dispatchEvent(loggedInEvent);

            resolve(true);
        });
    }

    signup(User) {
        this.userRepository.save(User)
    }

    logout() {
        localStorage.removeItem('user_session');
        sessionStorage.clear();

        const loggedOutEvent = new CustomEvent("userLoggedOut");

        window.dispatchEvent(loggedOutEvent);

    }

    /**
     * @returns {User}
     *
     * @throws Error lança um erro caso não exista uma sessão de usuário
     */
    getAuthenticatedUser() {
        const user = JSON.parse(sessionStorage.getItem('user'));

        if(! user.id) {
            throw new Error('No user session found');
        }

        return user;
    }

    isAuthenticated() {
        const user = JSON.parse(sessionStorage.getItem('user'));

        return !!user?.id;
    }
}