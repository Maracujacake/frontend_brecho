// src/components/CartItems.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Usando o hook useNavigate para redirecionamento

    useEffect(() => {
        const fetchCartItems = async () => {
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');

            if (!email || !password) {
                setError('Você precisa estar logado para visualizar o carrinho.');
                return;
            }

            try {
                const response = await axios.get('http://localhost:8080/breshow/carrinho/itens', {
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
        };

        fetchCartItems();
    }, [navigate]); // Incluindo navigate como dependência

    return (
        <div>
            <h2>Itens no Carrinho</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {items.length > 0 ? (
                <ul>
                    {items.map((item) => (
                        <li key={item.produto.sku}>
                            <strong>{item.produto.nome}</strong> (SKU: {item.produto.sku}) - Quantidade: {item.quantidade}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>O carrinho está vazio.</p>
            )}
        </div>
    );
};

export default CartItems;
