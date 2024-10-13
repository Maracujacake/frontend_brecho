// src/components/FinalizeOrder.js
import React, { useState } from 'react';
import axios from 'axios';

const FinalizeOrder = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFinalizeOrder = async () => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado para finalizar o pedido.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/breshow/carrinho/finalizar', {}, {
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <button onClick={handleFinalizeOrder}>Finalizar Pedido</button>
        </div>
    );
};

export default FinalizeOrder;
