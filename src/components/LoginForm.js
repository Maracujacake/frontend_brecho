// src/components/LoginForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Adiciona o estado de login
    const navigate = useNavigate();

    // Verifica se o usuário está logado
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (storedEmail && storedPassword) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/breshow/usuario/login', {
                email,
                password,
            });

            console.log('Token:', response.data);
            localStorage.setItem('token', response.data);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            setIsLoggedIn(true); // Atualiza o estado de login

            alert('Login realizado com sucesso!');
            navigate('/');
        } catch (err) {
            console.error('Erro ao fazer login:', err);
            alert('Erro ao fazer login. Verifique as credenciais e tente novamente.');
            setError('Credenciais inválidas.');
        }
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm('Deseja fazer logout?');
        if (confirmLogout) {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            setIsLoggedIn(false); // Atualiza o estado de login
            alert('Logout realizado com sucesso!');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            {isLoggedIn ? ( // Se o usuário estiver logado
                <>
                    <h2 className="text-lg font-semibold text-center text-gray-800 mb-6">Deseja fazer logout?</h2>
                    <button 
                        onClick={handleLogout} 
                        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email:</label>
                            <input 
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Senha:</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Entrar
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default LoginForm;
