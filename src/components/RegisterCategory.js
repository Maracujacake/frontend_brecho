/* 
    Este componente é responsável por exibir um formulário para o usuário registrar uma nova categoria
    caso tenha permissão.

    Ele exibe um campo de texto para o usuário digitar o nome da categoria e um botão para registrar a categoria.
    Ao criar um novo produto, o usuário vai poder informar a nova categoria criada.
*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import ErrorMessage from './shared/ErrorMessage';

const RegisterCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRegisterCategory = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado como administrador para registrar uma categoria.');
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/categoria/register`, 
                { nome: categoryName }, // Corpo da requisição com o nome da categoria
                {
                    auth: {
                        username: email,
                        password: password,
                    },
                }
            );

            setMessage(`Categoria '${response.data.nome}' registrada com sucesso!`); // Mensagem de sucesso
            setError(''); // Limpa mensagens de erro
            setCategoryName(''); // Limpa o campo de entrada
        } catch (err) {
            console.error('Erro ao registrar categoria:', err);
            setError('Erro ao registrar categoria. Por favor, tente novamente.');
            setMessage(''); // Limpa mensagem de sucesso
        }
    };

    return (
        <div>
            <h2>Registrar Categoria</h2>
            <form onSubmit={handleRegisterCategory}>
                <div>
                    <label>Nome da Categoria:</label>
                    <input 
                        type="text" 
                        value={categoryName} 
                        onChange={(e) => setCategoryName(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Registrar Categoria</button>
            </form>
            <ErrorMessage message={error} />
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default RegisterCategory;
