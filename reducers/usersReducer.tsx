import { Action, GET_USERS_ERROR, GET_USERS_SUCCESS } from '../actions/types'

const INITIAL_STATE = { users: [], isError: false, isSuccess: false, isLoading: true };

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload, isSuccess: true, isLoading: false };
        case GET_USERS_ERROR:
            return { ...state, isError: true, isLoading: false }
        default:
            return state;
    }
}