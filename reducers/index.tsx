import { combineReducers } from 'redux';
import usersReducer from './usersReducer'

export const reducers = combineReducers({
    users: usersReducer
}); 