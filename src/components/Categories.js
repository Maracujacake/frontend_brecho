/*
    Esse componente exibe a lista de categorias disponíveis no sistema
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import ErrorMessage from './shared/ErrorMessage';

const Categories = () => {
    // Estado para armazenar as categorias
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');

    // Função para buscar todas as categorias da API
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/categoria/all`);
            setCategories(response.data); // Atualiza o estado com as categorias recebidas
            setError(''); // Limpa possíveis erros anteriores
        } catch (err) {
            console.error('Erro ao buscar categorias:', err);
            setError('Erro ao carregar as categorias.'); // Define uma mensagem de erro em caso de falha
        }
    };

    // UseEffect para carregar as categorias ao montar o componente
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div>
            <h2>Lista de Categorias</h2>
            {error && <ErrorMessage message={error} />}
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.nome}</li> // Exibe o nome de cada categoria
                ))}
            </ul>
        </div>
    );
};

export default Categories;
