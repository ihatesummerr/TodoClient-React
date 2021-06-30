import axios from 'axios';

export const fetchTodos = async () => {
    try {
        const { data } = await axios.get('http://localhost:5000/todos');
        return data;
    } catch (error) {
        
    }
}