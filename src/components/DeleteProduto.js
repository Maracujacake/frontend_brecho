// src/components/DeleteProduto.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduto = () => {
    const [sku, setSku] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado como administrador para deletar uma categoria.');
            return;
        }

        try {
            // Formando a URL corretamente
            const response = await axios.delete(`http://localhost:8080/breshow/produto/delete/${sku}`, {
                auth: {
                    username: email,
                    password: password,
                },
            });

            setMessage(`Produto com SKU: '${sku}' deletado com sucesso!`);
            setError(''); 
            setSku(''); 
        } catch (err) {
            console.error('Erro ao deletar produto:', err);
            setError('Erro ao deletar produto. Verifique se o SKU está correto e tente novamente.');
            setMessage(''); // Limpa mensagem de sucesso
        }
    };

    return (
        <div>
            <h2>Deletar Produto</h2>
            <form onSubmit={handleDelete}>
                <div>
                    <label>SKU do Produto:</label>
                    <input
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Deletar Produto</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteProduto;
