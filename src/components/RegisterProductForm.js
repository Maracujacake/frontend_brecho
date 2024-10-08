// src/components/RegisterProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterProductForm = () => {
    const [sku, setSku] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegisterProduct = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Pegar o email e senha do localStorage para autenticação HTTP Basic
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('Você precisa estar logado como ADMIN para registrar um produto.');
            return;
        }

        // Criar o produto com base nos dados do formulário
        const newProduct = {
            sku: sku,
            nome: nome,
            descricao: descricao,
            preco: parseFloat(preco),
            quantidade: parseInt(quantidade),
            categorias: [], // Aqui você pode adicionar as categorias como necessário
        };

        try {
            // Fazer a requisição POST com autenticação Basic
            const response = await axios.post('http://localhost:8080/breshow/produto/registrar', newProduct, {
                auth: {
                    username: email,
                    password: password,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Verificar se o produto foi registrado com sucesso
            console.log('Produto registrado:', response.data);
            setSuccess('Produto registrado com sucesso!');
            setError(''); // Limpar mensagem de erro
        } catch (err) {
            console.error('Erro ao registrar produto:', err);
            setError('Erro ao registrar o produto. Verifique os dados e tente novamente.');
            setSuccess(''); // Limpar mensagem de sucesso
        }
    };

    return (
        <form onSubmit={handleRegisterProduct}>
            <h2>Registrar Produto</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <div>
                <label>SKU:</label>
                <input 
                    type="text" 
                    value={sku} 
                    onChange={(e) => setSku(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Nome:</label>
                <input 
                    type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Descrição:</label>
                <textarea 
                    value={descricao} 
                    onChange={(e) => setDescricao(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Preço:</label>
                <input 
                    type="number" 
                    value={preco} 
                    onChange={(e) => setPreco(e.target.value)} 
                    step="0.01"
                    required 
                />
            </div>
            <div>
                <label>Quantidade:</label>
                <input 
                    type="number" 
                    value={quantidade} 
                    onChange={(e) => setQuantidade(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Registrar Produto</button>
        </form>
    );
};

export default RegisterProductForm;
