import * as types from '../constants/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case types.FETCH_TODOS:
            return action.payload;
        case types.CREATE_TODO:
            return [...state, action.payload];
        case types.DELETE_TODO:
            console.log(action.payload);
            return state.filter((todo) => todo._id !== action.payload);
        default:
            return state;
    }
};
