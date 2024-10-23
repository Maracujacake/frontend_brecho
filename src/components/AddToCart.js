/* 
    Este componente é responsável por adicionar um produto ao carrinho de compras.
    Ele exibe um formulário onde o usuário pode informar o SKU do produto e a quantidade

*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import ErrorMessage from './shared/ErrorMessage';
import LoadingSpinner from './shared/LoadingSpinner';
import { getAuthCredentials } from './shared/getAuthCredentials';


const AddToCart = () => {
    const [sku, setSku] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [cart, setCart] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // função para adicionar um produto ao carrinho
    const handleAddToCart = async (e) => {
        e.preventDefault();

        // verifica se o SKU e a quantidade são válidos
        if (!sku || quantidade <= 0) {
            setError('SKU e quantidade devem ser válidos.');
            return;
        }

        const { email, password } = getAuthCredentials();

        if (!email || !password) {
            setError('Você precisa estar logado para adicionar produtos ao carrinho.');
            return;
        }

        setIsLoading(true);



        try {
            const response = await axios.post(
                `${API_BASE_URL}/carrinho/adicionar/${sku}`,
                {},
                {
                    params: {
                        quantidade: quantidade,
                    },
                    auth: {
                        username: email,
                        password: password,
                    },
                }
            );

            setCart(response.data);
            setError('');
            alert('Produto adicionado ao carrinho com sucesso!');
        } catch (err) {
            console.error('Erro ao adicionar produto ao carrinho:', err);
            setError('Erro ao adicionar o produto. Verifique o SKU e tente novamente.');
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            
            <h2>Adicionar Produto ao Carrinho</h2>
            {error && <ErrorMessage message={error} />}

            {/*  Verifica se os dados já foram recebidos e validados, caso não, exibe mensagem de loading   */}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <form onSubmit={handleAddToCart}>
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
                            onChange={(e) => setQuantidade(parseInt(e.target.value, 10))} 
                            min="1" 
                            required 
                        />
                    </div>

                    <button type="submit">Adicionar ao Carrinho</button>
                </form>
            )}

            {cart && (
                <div>
                    <h3>Carrinho Atualizado:</h3>
                    <p><strong>ID do Carrinho:</strong> {cart.id}</p>
                    <p><strong>Cliente:</strong> {cart.cliente.primeiro_nome} {cart.cliente.ultimo_nome}</p>
                    <p><strong>Itens no Carrinho:</strong></p>
                    <ul>
                        {cart.itens.map((item) => (
                            <li key={item.produto.sku}>
                                {item.produto.nome} (SKU: {item.produto.sku}) - Quantidade: {item.quantidade}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default AddToCart;
