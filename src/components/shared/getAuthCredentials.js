/* 
    Função que retorna as credenciais de autenticação do usuário a partir do localStorage.
    Deve ser utilizada para obter as credenciais de autenticação antes de realizar uma requisição
    
*/

export const getAuthCredentials = () => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return { email, password };
};


