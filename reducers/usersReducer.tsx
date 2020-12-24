import { Action, GET_USERS_ERROR, GET_USERS_SUCCESS } from '../actions/types'

const INITIAL_STATE = { users: [], isError: false };

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            console.log('Comes here');
            
            return { ...state, users: action.payload };
        case GET_USERS_ERROR:
            console.log('error');
            return { ...state, isError: true }
        default:
            return state;
    }
}