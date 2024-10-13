// src/components/AddToCart.js
import React, { useState } from 'react';
import axios from 'axios';

const AddToCart = () => {
    const [sku, setSku] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [cart, setCart] = useState(null);
    const [error, setError] = useState('');

    const handleAddToCart = async (e) => {
        e.preventDefault();

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado para adicionar produtos ao carrinho.');
            return;
        }

        if (!sku || quantidade <= 0) {
            setError('SKU e quantidade devem ser válidos.');
            return;
        }

        try {
            const response = await axios.post(
                `http://localhost:8080/breshow/carrinho/adicionar/${sku}`,
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
    };

    return (
        <div>
            <h2>Adicionar Produto ao Carrinho</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

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
