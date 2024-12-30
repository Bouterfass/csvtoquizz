import axios from 'axios';
import { API_URL } from '../../globals/variables';


export const createUser = async (data: { username: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/users/sign-in`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Retourne les données si tout va bien
    } catch (error: any) {
        if (error.response) {
            // Si le serveur a répondu avec une erreur (400, 500, etc.)
            console.error('Erreur serveur :', error.response.data.errors);
            throw error.response; // Propager l'erreur pour qu'elle soit captée dans `onError`
        } else {
            // Erreur réseau ou autre
            throw new Error('Une erreur réseau est survenue.');
        }
    }
};
