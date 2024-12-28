import axios from 'axios';
import { API_URL } from '../../globals/variables';

export const createUser = async (data: {username: string, email: string, password: string}) => {
    const response = await axios.post(`${API_URL}/users`, data, {
        headers: {
            'Content-Type': 'application/json', // Type de contenu
        },
    });
    return response.data;
}
