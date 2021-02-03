import { CLIENTS_FETCH_DATA_SUCCESS } from './actions';

export const ClientsReducer = (state = [], action) => {
    switch (action.type) {
        case CLIENTS_FETCH_DATA_SUCCESS:
            return action.clients;
        default:
            return state;
    }
}