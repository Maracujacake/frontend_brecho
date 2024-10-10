import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PerfilUsuario = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');

            if (!email || !password) {
                setError('Nenhuma credencial encontrada. Por favor, faça o login.');
                return;
            }

            try {
                // Realizando a requisição com autenticação básica usando email e password do localStorage
                const response = await axios.get('http://localhost:8080/breshow/cliente/me', {
                    auth: {
                        username: email,
                        password: password,
                    },
                });

                setUserData(response.data);
                setError(''); // Limpa o erro se a requisição for bem-sucedida
            } catch (err) {
                console.error('Erro ao buscar os dados do usuário:', err);
                setError('Erro ao buscar os dados do usuário. Verifique suas credenciais.');
            }
        };

        fetchUserData();
    }, []); // Executa apenas uma vez após o componente ser montado

    return (
        <div>
            <h2>Perfil do Usuário</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {userData ? (
                <div>
                    <p>ID: {userData.id}</p>
                    <p>Nome: {userData.primeiro_nome} {userData.ultimo_nome}</p>
                    <p>Email: {userData.email}</p>
                    <p>Telefone: {userData.telefone}</p>
                </div>
            ) : (
                !error && <p>Carregando dados do usuário...</p>
            )}
        </div>
    );
};

export default PerfilUsuario;
