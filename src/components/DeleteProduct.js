/* 
    Esse componente permite deletar um produto do sistema através do SKU (código único).
    Ele exibe um formulário onde o usuário pode inserir o SKU do produto que deseja deletar.
*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import { getAuthCredentials } from './shared/getAuthCredentials';
import ErrorMessage from './shared/ErrorMessage';

const DeleteProduct = () => {
    const [sku, setSku] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        const { email, password } = getAuthCredentials();

        if (!email || !password) {
            setError('Você precisa estar logado como administrador para deletar uma categoria.');
            return;
        }

        try {
            // Formando a URL corretamente
            const response = await axios.delete(`${API_BASE_URL}/produto/delete/${sku}`, {
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
            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default DeleteProduct;
