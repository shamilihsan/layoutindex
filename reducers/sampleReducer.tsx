import { Action, SAMPLE_ACTION } from '../actions/types'

const INITIAL_STATE = { sample: '' };

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case SAMPLE_ACTION:
            return { ...state, sample: action.payload };
        default:
            return state;
    }
}