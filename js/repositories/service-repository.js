import {Service} from "../models";

export class ServiceRepository {
    /**
     * @return Service[]
     */
    list() {
        return [
            { id: '1', name: 'Banho', price: 50.00 },
            { id: '2', name: 'Tosa higiênica', price: 40.00 },
            { id: '3', name: 'Tosa completa', price: 80.00 },
            { id: '4', name: 'Banho e tosa', price: 100.00 },
            { id: '5', name: 'Corte de unhas', price: 20.00 },
            { id: '6', name: 'Limpeza de ouvidos', price: 25.00 },
            { id: '7', name: 'Escovação de dentes', price: 30.00 },
            { id: '8', name: 'Hidratação de pelos', price: 45.00 },
            { id: '9', name: 'Desembolo de pelos', price: 60.00 },
            { id: '10', name: 'Consulta veterinária', price: 120.00 },
            { id: '11', name: 'Vacinação', price: 90.00 },
            { id: '12', name: 'Aplicação de antipulgas', price: 35.00 },
            { id: '13', name: 'Hospedagem diária', price: 80.00 },
            { id: '14', name: 'Creche diária', price: 70.00 },
            { id: '15', name: 'Passeio', price: 40.00 },
            { id: '16', name: 'Adestramento básico', price: 150.00 },
            { id: '17', name: 'Táxi pet', price: 45.00 },
            { id: '18', name: 'Sessão de fisioterapia', price: 140.00 },
            { id: '19', name: 'Sessão de acupuntura', price: 130.00 },
            { id: '20', name: 'Remoção de carrapatos', price: 55.00 },
        ].map(data => new Service(data));
    }

    findById(id) {
        return this.list().find(service => service.id === id);
    }
}