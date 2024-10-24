/*
    Este componente é responsável por deletar o carrinho do usuário.
    Ele exibe um botão que, ao ser clicado, deleta o carrinho do usuário.
    Talvez uma página para deletar o carrinho seja algo temporário, ele só deve ser
    deletado ao final da compra, por exemplo.
*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import ErrorMessage from './shared/ErrorMessage';
import { getAuthCredentials } from './shared/getAuthCredentials';

const DeleteCart = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDeleteCart = async () => {
        const { email, password } = getAuthCredentials();

        if (!email || !password) {
            setError('Você precisa estar logado para deletar o carrinho.');
            return;
        }

        try {
            const response = await axios.delete(`${API_BASE_URL}/carrinho/deletar`, {
                auth: {
                    username: email,
                    password: password,
                },
            });

            setMessage(response.data); // Mensagem de sucesso
            setError(''); // Limpa mensagens de erro
        } catch (err) {
            console.error('Erro ao deletar carrinho:', err);
            setError('Erro ao deletar o carrinho. Por favor, tente novamente.');
            setMessage(''); // Limpa mensagem de sucesso
        }
    };

    return (
        <div>
            <h2>Deletar Carrinho</h2>
            {error && <ErrorMessage message={error} />}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <button onClick={handleDeleteCart}>Deletar Carrinho</button>
        </div>
    );
};

export default DeleteCart;
