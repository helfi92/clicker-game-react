import { combineReducers } from 'redux';
import {
    FETCH_SCORE,
    ADD_SCORE
} from './types';

const scoreReducer = (state = 0, action) => {
    console.log('actions!: ', action);
    switch(action.type) {
        case ADD_SCORE:
            return action.payload
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    score:  scoreReducer
});

export default rootReducer;

