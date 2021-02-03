import {
    CLIENT_FORM_FIRST_NAME,
    CLIENT_FORM_SURNAME,
    CLIENT_FORM_PHONE
} from './actions';

const defaultState = {
    firstName: '',
    surName: '',
    phone: ''
}
export const ClientFormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CLIENT_FORM_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };
        case CLIENT_FORM_SURNAME:
            return {
                ...state,
                surName: action.payload
            };
        case CLIENT_FORM_PHONE:
            return {
                ...state,
                phone: action.payload
            };
    }
    return state;
}