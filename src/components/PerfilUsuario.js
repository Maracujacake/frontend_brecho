/*
    Este componente é responsável por exibir os dados do usuário logado.
    Caso o usuário não esteja logado, ele exibe uma mensagem de erro.
    Talvez uma boa ideia seja redirecionar o usuário para a página de login.
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import { getAuthCredentials } from './shared/getAuthCredentials';
import ErrorMessage from './shared/ErrorMessage';

const PerfilUsuario = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const {email, password} = getAuthCredentials();

            if (!email || !password) {
                setError('Nenhuma credencial encontrada. Por favor, faça o login.');
                return;
            }

            try {
                // Realizando a requisição com autenticação básica usando email e password do localStorage
                const response = await axios.get(`${API_BASE_URL}/cliente/me`, {
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
            {error && <ErrorMessage message={error} />}
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
