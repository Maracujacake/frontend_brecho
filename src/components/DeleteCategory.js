// src/components/DeleteCategory.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteCategory = () => {
    const [categoryId, setCategoryId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDeleteCategory = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado como administrador para deletar uma categoria.');
            return;
        }

        try {
            // Formando a URL corretamente
            await axios.delete(`http://localhost:8080/breshow/categoria/delete/{id}?id=${categoryId}`, {
                auth: {
                    username: email,
                    password: password,
                },
            });

            setMessage(`Categoria com ID '${categoryId}' deletada com sucesso!`);
            setError(''); // Limpa mensagens de erro
            setCategoryId(''); // Limpa o campo de entrada
        } catch (err) {
            console.error('Erro ao deletar categoria:', err);
            setError('Erro ao deletar categoria. Verifique se o ID está correto e tente novamente.');
            setMessage(''); // Limpa mensagem de sucesso
        }
    };

    return (
        <div>
            <h2>Deletar Categoria</h2>
            <form onSubmit={handleDeleteCategory}>
                <div>
                    <label>ID da Categoria:</label>
                    <input 
                        type="text" 
                        value={categoryId} 
                        onChange={(e) => setCategoryId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Deletar Categoria</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default DeleteCategory;
