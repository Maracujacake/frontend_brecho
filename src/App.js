// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterProductPage from './pages/RegisterProduct';
// Importe outras páginas e componentes

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={< LoginPage />} />
                <Route path="/registrarProduto" element={< RegisterProductPage />} />
                {/* Defina outras rotas aqui, usando o atributo 'element' */}
            </Routes>
        </Router>
    );
};

export default App;
