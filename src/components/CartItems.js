// src/components/CartItems.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartItems = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

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
            }
        };

        fetchCartItems();
    }, []);

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