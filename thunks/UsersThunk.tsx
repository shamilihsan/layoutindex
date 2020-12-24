import { GET_USERS_ERROR, GET_USERS_SUCCESS } from '../actions/types';
import api from '../API'

export const fetchUsers = () => {
    return (dispatch) => {
        return api.getUsers().then(
            users => dispatch({ type: GET_USERS_SUCCESS, payload: users.data.data }),
            error => dispatch({ type: GET_USERS_ERROR, payload: error })
        )
    }
}