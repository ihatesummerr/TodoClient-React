import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchTodos = async () => API.get('/todos');

export const createTodo = async (todo) => API.post('/todos', todo);

export const deleteTodo = async (id) => API.delete(`/todos/${id}`);

export const updateTodo = async (id, todo) => API.patch(`/todos/${id}`, todo);
