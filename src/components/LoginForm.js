// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        try {
            const response = await axios.post('http://localhost:8080/breshow/usuario/login', {
                email,
                password,
            });

            // Armazena o token (ou faz algo com ele, como redirecionar)
            console.log('Token:', response.data);
            localStorage.setItem('token', response.data); // Armazenando o token no localStorage
            localStorage.setItem('email', email); // Armazenando o email no localStorage
            localStorage.setItem('password', password); // Armazenando a senha no localStorage
            // Redirecionar ou atualizar o estado global aqui se necessário

            alert('Login realizado com sucesso!');
        } catch (err) {
            console.error('Erro ao fazer login:', err);
            alert('Erro ao fazer login. Verifique as credenciais e tente novamente.');
            setError('Credenciais inválidas.'); // Mensagem de erro para o usuário
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Email:</label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Senha:</label>
                <input 
                    type="text" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Entrar</button>
        </form>
    );
};

export default LoginForm;
