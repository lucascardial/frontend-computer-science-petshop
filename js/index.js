import {AuthenticationService, LocalStorageService} from './services/index.js'
import {PetRepository, ServiceRepository, SpeciesRepository, UserRepository} from './repositories/index.js';

const localStorageServiceInstance = new LocalStorageService();
const userRepositoryInstance = new UserRepository(localStorageServiceInstance);
const authServiceInstance = new AuthenticationService(userRepositoryInstance, localStorageServiceInstance);
const petRepositoryInstance = new PetRepository(localStorageServiceInstance, authServiceInstance);
const serviceRepositoryInstance = new ServiceRepository();
const specieRepositoryInstance = new SpeciesRepository();

window.Services = {}
window.Repositories = {}

window.Services.Auth = authServiceInstance;
window.Repositories.PetRepository = petRepositoryInstance;
window.Repositories.ServiceRepository = serviceRepositoryInstance;
window.Repositories.SpeciesRepository = specieRepositoryInstance;
