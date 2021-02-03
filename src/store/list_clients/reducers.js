import { LOAD_LIST_CLIENTS } from './actions';

export const ListClientsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_LIST_CLIENTS:
            return action.listClients;
        default:
            return state;
    }
}