import { combineReducers } from 'redux';
import sampleReducer from '../reducers/sampleReducer'

export const reducers = combineReducers({
    sample: sampleReducer
}); 