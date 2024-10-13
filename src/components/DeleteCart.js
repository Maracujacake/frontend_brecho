// src/components/DeleteCart.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteCart = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDeleteCart = async () => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado para deletar o carrinho.');
            return;
        }

        try {
            const response = await axios.delete('http://localhost:8080/breshow/carrinho/deletar', {
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <button onClick={handleDeleteCart}>Deletar Carrinho</button>
        </div>
    );
};

export default DeleteCart;
