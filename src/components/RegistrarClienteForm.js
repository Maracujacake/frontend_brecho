/* 
    Este componente é responsável por exibir um formulário para registrar um novo cliente.
    Não é necessário permissão para registrar um novo cliente.
*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import ErrorMessage from './shared/ErrorMessage';

const RegistrarClienteForm = () => {
    // Estados para armazenar os dados do formulário
    const [primeiroNome, setPrimeiroNome] = useState('');
    const [ultimoNome, setUltimoNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Função para realizar o cadastro do cliente
    const handleRegisterCustomer = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const newCustomer = {
            primeiro_nome: primeiroNome,
            ultimo_nome: ultimoNome,
            email: email,
            senha: senha,
            telefone: telefone,
            pedidos: [] // Sempre será um array vazio no cadastro inicial
        };

        try {
            // Fazer a requisição POST para registrar o cliente
            const response = await axios.post(`${API_BASE_URL}/cliente/register`, newCustomer, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Verificar se o cliente foi registrado com sucesso
            console.log('Cliente registrado:', response.data);
            setSuccess('Cliente registrado com sucesso!');
            setError(''); // Limpar mensagens de erro
        } catch (err) {
            console.error('Erro ao registrar cliente:', err);
            setError('Erro ao registrar o cliente. Verifique os dados e tente novamente.');
            setSuccess(''); // Limpar mensagens de sucesso
        }
    };

    return (
        <form onSubmit={handleRegisterCustomer}>
            <h2>Registrar Cliente</h2>
            <ErrorMessage message={error} />
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <div>
                <label>Primeiro Nome:</label>
                <input 
                    type="text" 
                    value={primeiroNome} 
                    onChange={(e) => setPrimeiroNome(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Último Nome:</label>
                <input 
                    type="text" 
                    value={ultimoNome} 
                    onChange={(e) => setUltimoNome(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Senha:</label>
                <input 
                    type="password" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Telefone:</label>
                <input 
                    type="text" 
                    value={telefone} 
                    onChange={(e) => setTelefone(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Registrar Cliente</button>
        </form>
    );
};

export default RegistrarClienteForm;
