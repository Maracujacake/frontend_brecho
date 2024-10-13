// src/components/CreateCart.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateCart = () => {
    const [cart, setCart] = useState(null);
    const [error, setError] = useState('');

    const handleCreateCart = async () => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado para criar um carrinho.');
            return;
        }

        try {
            // Enviando a requisição para criar o carrinho
            const response = await axios.post(
                'http://localhost:8080/breshow/carrinho/criar',
                {}, // Nenhum dado extra é necessário, apenas autenticação
                {
                    auth: {
                        username: email,
                        password: password,
                    },
                }
            );

            // Atualiza o estado com os dados do carrinho criado
            setCart(response.data);
            setError('');
            alert('Carrinho criado com sucesso!');
        } catch (err) {
            console.error('Erro ao criar carrinho:', err);
            setError('Erro ao criar o carrinho. Tente novamente.');
        }
    };

    return (
        <div>
            <h2>Criar Carrinho</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button onClick={handleCreateCart}>Criar Carrinho</button>

            {cart && (
                <div>
                    <h3>Carrinho Criado com Sucesso:</h3>
                    <p><strong>ID do Carrinho:</strong> {cart.id}</p>
                    <p><strong>Cliente:</strong> {cart.cliente.primeiro_nome} {cart.cliente.ultimo_nome}</p>
                    <p><strong>Itens:</strong> {cart.itens.length} itens no carrinho.</p>
                </div>
            )}
        </div>
    );
};

export default CreateCart;
