/* 
    Este componente é responsável por finalizar/confirmar o pedido do usuário, que estava até agora
    com produtos no carrinho.
    Ele exibe um botão que, ao ser clicado, finaliza o pedido do usuário.
    Após finalizar o pedido, o carrinho é deletado.
*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import { getAuthCredentials } from './shared/getAuthCredentials';
import ErrorMessage from './shared/ErrorMessage';

const FinalizeOrder = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFinalizeOrder = async () => {
        const { email, password } = getAuthCredentials();

        if (!email || !password) {
            setError('Você precisa estar logado para finalizar o pedido.');
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/carrinho/finalizar`, {}, {
                auth: {
                    username: email,
                    password: password,
                },
            });

            setMessage('Pedido finalizado com sucesso!'); // Mensagem de sucesso
            setError(''); // Limpa mensagens de erro
        } catch (err) {
            console.error('Erro ao finalizar pedido:', err);
            setError('Erro ao finalizar pedido. Por favor, tente novamente.');
            setMessage(''); // Limpa mensagem de sucesso
        }
    };

    return (
        <div>
            <h2>Finalizar Pedido</h2>
            {error && <ErrorMessage message={error} />}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <button onClick={handleFinalizeOrder}>Finalizar Pedido</button>
        </div>
    );
};

export default FinalizeOrder;
