/* 
    Este componente é responsável por deletar uma categoria do banco de dados.
    Utilizar com cuidado pois podem haver produtos associados a essa categoria.
    Tentar deletar uma categoria com produtos associados pode resultar em erro.
*/
import React, { useState } from 'react';
import axios from 'axios';
import { getAuthCredentials } from './shared/getAuthCredentials';
import { API_BASE_URL } from '../utils/apiConfig';
import ErrorMessage from './shared/ErrorMessage';

const DeleteCategory = () => {
    const [categoryId, setCategoryId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDeleteCategory = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const { email, password } = getAuthCredentials();

        if (!email || !password) {
            setError('Você precisa estar logado como administrador para deletar uma categoria.');
            return;
        }

        try {
            // Formando a URL corretamente
            await axios.delete(`${API_BASE_URL}/categoria/delete/{id}?id=${categoryId}`, {
                auth: {
                    username: email,
                    password: password,
                },
            });

            setMessage(`Categoria com ID '${categoryId}' deletada com sucesso!`);
            setError(''); // Limpa mensagens de erro
            setCategoryId(''); // Limpa o campo de entrada
        } catch (err) {
            console.error('Erro ao deletar categoria:', err);
            setError('Erro ao deletar categoria. Verifique se o ID está correto e tente novamente.');
            setMessage(''); // Limpa mensagem de sucesso
        }
    };

    return (
        <div>
            <h2>Deletar Categoria</h2>
            <form onSubmit={handleDeleteCategory}>
                <div>
                    <label>ID da Categoria:</label>
                    <input 
                        type="text" 
                        value={categoryId} 
                        onChange={(e) => setCategoryId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Deletar Categoria</button>
            </form>
            {error && <ErrorMessage message={error} />}
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default DeleteCategory;
