/* 
    // Este componente é responsável por exibir um spinner de carregamento
    // Para utilizar o spinner, basta importar o componente e colocá-lo no local desejado

*/

import React from 'react';
import './styles/LoadingSpinner.css'; // Para a estilização do spinner

const LoadingSpinner = () => {
    return (
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    );
};

export default LoadingSpinner;
