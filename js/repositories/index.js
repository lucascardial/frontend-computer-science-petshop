import { ServiceRepository} from "./service-repository.js";
import {SpeciesRepository} from "./specie-repository.js";
import {PetRepository} from "./pet-repository.js";

window.Repositories.Service = new ServiceRepository();
window.Repositories.Specie = new SpeciesRepository();
window.Repositories.Pet = new PetRepository();
