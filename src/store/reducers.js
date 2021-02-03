import { combineReducers } from 'redux';
import { SearchClientReducer } from './search_client_menu/reducers';
import { ClientFormReducer } from './search_client_menu/client_form/reducers';
import { ClientsReducer } from './load_clients/reducers';
import { ListClientsReducer } from './list_clients/reducers';

export default combineReducers({
    SearchClientReducer,
    ClientFormReducer,
    ClientsReducer,
    ListClientsReducer
});