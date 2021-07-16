import * as types from '../constants/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case types.FETCH_TODOS:
            return action.payload;
        case types.CREATE_TODO:
            return [...state, action.payload];
        case types.DELETE_TODO:
            return state.filter((todo) => todo._id !== action.payload);
        case types.UPDATE_TODO:
            return state.map((todo) =>
                action.payload._id === todo._id ? action.payload : todo
            );
        default:
            return state;
    }
};
