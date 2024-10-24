/* 
    Este componente é responsável por remover um produto do carrinho de compras. O cliente,
    estando logado, deve informar o SKU do produto que deseja remover e a quantidade.

    TO-DO: checar se a quantidade informada é válida.
*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import { getAuthCredentials } from './shared/getAuthCredentials';
import ErrorMessage from './shared/ErrorMessage';

const RemoveProductFromCart = () => {
    const [sku, setSku] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRemoveProduct = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const {email, password} = getAuthCredentials();

        if (!email || !password) {
            setError('Você precisa estar logado para remover produtos do carrinho.');
            return;
        }

        try {
            const response = await axios.delete(`${API_BASE_URL}/carrinho/remover/${sku}`, {
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
            <ErrorMessage message={error} />
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
