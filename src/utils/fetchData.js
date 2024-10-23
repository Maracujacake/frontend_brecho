/*
    Este arquivo é responsável por realizar o fetch dos dados recebidos da API
    A função deve ser usada para realizar fetch de dados aonde não são necessários 
    tratamentos específicos ou validação de autorização ( onde não precisa de login )
*/
import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

export const fetchData = async (endpoint, setError, setLoading) => {
    setLoading(true);
    try {
        const response = await axios.get(`${API_BASE_URL}${endpoint}`);
        return response.data;
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setError('Erro ao carregar dados. Tente novamente mais tarde.');
        return null;
    } finally {
        setLoading(false);
    }
};


