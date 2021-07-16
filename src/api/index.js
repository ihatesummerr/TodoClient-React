import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchTodos = async () => API.get('/todos');

export const createTodo = async (todo) => axios.post('/todos', todo);

export const deleteTodo = async (id) => axios.delete(`/todos/${id}`);
