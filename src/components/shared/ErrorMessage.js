/*
    Este componente é responsável por renderizar uma mensagem de erro na tela.
    Ele recebe uma mensagem como parâmetro e exibe essa mensagem em vermelho e negrito.
    Deve ser utilizado em qualquer parte do sistema que precise exibir mensagens de erro.

*/

import React from 'react';

const ErrorMessage = ({ message }) => {
    if (!message) return null; // Se não houver mensagem, não renderiza nada

    return (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
            {message}
        </p>
    );
};

export default ErrorMessage;
