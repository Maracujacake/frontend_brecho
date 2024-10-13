// src/components/RemoveProductFromCart.js
import React, { useState } from 'react';
import axios from 'axios';

const RemoveProductFromCart = () => {
    const [sku, setSku] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRemoveProduct = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado para remover produtos do carrinho.');
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:8080/breshow/carrinho/remover/${sku}`, {
                params: { quantidade },
                auth: {
                    username: email,
                    password: password,
                },
            });

            setMessage('Produto removido com sucesso do carrinho.'); // Mensagem de sucesso
            setError(''); // Limpa mensagens de erro
            setSku(''); // Limpa o campo SKU
            setQuantidade(1); // Reseta a quantidade para o padrão
        } catch (err) {
            console.error('Erro ao remover produto do carrinho:', err);
            setError('Erro ao remover produto do carrinho. Por favor, tente novamente.');
            setMessage(''); // Limpa mensagem de sucesso
        }
    };

    return (
        <div>
            <h2>Remover Produto do Carrinho</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <form onSubmit={handleRemoveProduct}>
                <div>
                    <label>SKU do Produto:</label>
                    <input 
                        type="text" 
                        value={sku} 
                        onChange={(e) => setSku(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input 
                        type="number" 
                        value={quantidade} 
                        onChange={(e) => setQuantidade(e.target.value)} 
                        min="1" 
                        required 
                    />
                </div>
                <button type="submit">Remover Produto</button>
            </form>
        </div>
    );
};

export default RemoveProductFromCart;
