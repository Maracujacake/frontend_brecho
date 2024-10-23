/*
    Este componente é responsável por exibir os itens do carrinho do cliente.
    Ele exibe uma lista com os itens do carrinho, ou uma mensagem informando que o carrinho está vazio.
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAuthCredentials } from './shared/getAuthCredentials'; 
import { API_BASE_URL } from '../utils/apiConfig';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';

const CartItems = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCartItems = async () => {
            const { email, password } = getAuthCredentials();

            if (!email || !password) {
                setError('Você precisa estar logado para visualizar os itens do carrinho.');
                return;
            }

            setIsLoading(true);

            try {
                const response = await axios.get(`${API_BASE_URL}/carrinho/itens`, {
                    auth: {
                        username: email,
                        password: password,
                    },
                });

                setItems(response.data);
                setError('');
            } catch (err) {
                console.error('Erro ao carregar itens do carrinho:', err);
                setError('Erro ao carregar os itens do carrinho. Por favor, tente novamente.');
                alert('Uma solução para o erro é criar o carrinho caso não tenha criado ainda.'); // Alerta de erro
                navigate('/cliente/criarCarrinho'); // Redireciona para a página de criar carrinho
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchCartItems();
    }, [navigate]);

    return (
        <div>
            <h2>Itens no Carrinho</h2>
            {error && <ErrorMessage message={error} />}
    
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                items.length > 0 ? (
                    <ul>
                        {items.map((item) => (
                            <li key={item.produto.sku}>
                                <strong>{item.produto.nome}</strong> (SKU: {item.produto.sku}) - Quantidade: {item.quantidade}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>O carrinho está vazio.</p>
                )
            )}
        </div>
    );
};

export default CartItems;
