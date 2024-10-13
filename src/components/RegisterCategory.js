// src/components/RegisterCategory.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRegisterCategory = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado como administrador para registrar uma categoria.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/breshow/categoria/register', 
                { nome: categoryName }, // Corpo da requisição com o nome da categoria
                {
                    auth: {
                        username: email,
                        password: password,
                    },
                }
            );

            setMessage(`Categoria '${response.data.nome}' registrada com sucesso!`); // Mensagem de sucesso
            setError(''); // Limpa mensagens de erro
            setCategoryName(''); // Limpa o campo de entrada
        } catch (err) {
            console.error('Erro ao registrar categoria:', err);
            setError('Erro ao registrar categoria. Por favor, tente novamente.');
            setMessage(''); // Limpa mensagem de sucesso
        }
    };

    return (
        <div>
            <h2>Registrar Categoria</h2>
            <form onSubmit={handleRegisterCategory}>
                <div>
                    <label>Nome da Categoria:</label>
                    <input 
                        type="text" 
                        value={categoryName} 
                        onChange={(e) => setCategoryName(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Registrar Categoria</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default RegisterCategory;
