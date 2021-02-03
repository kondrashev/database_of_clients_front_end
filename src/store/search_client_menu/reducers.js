import { SEARCH_CLIENT_SURNAME } from './actions';

const defaultState = { surName: '' }

export const SearchClientReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_CLIENT_SURNAME:
            return {
                ...state,
                surName: action.payload
            };
    }
    return state;
}