import * as api from '../api';
import * as types from '../constants/actionTypes';

export const getTodos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTodos();
        dispatch({ type: types.FETCH_TODOS, payload: data });
    } catch (error) {}
};

export const createTodo = (todo) => async (dispatch) => {
    try {
        const { data } = await api.createTodo(todo);
        dispatch({ type: types.CREATE_TODO, payload: data });
    } catch (error) {}
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await api.deleteTodo(id);
        dispatch({ type: types.DELETE_TODO, payload: id });
    } catch (error) {}
};

export const updateTodo = (id, todo) => async (dispatch) => {
    try {
        const { data } = await api.updateTodo(id, todo);
        dispatch({ type: types.UPDATE_TODO, payload: data });
    } catch (error) {}
};
