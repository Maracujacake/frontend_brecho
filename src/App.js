// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterProductPage from './pages/RegisterProduct';
import HomePage from './pages/HomePage';
import ProdutosPage from './pages/ProdutosPage';
import ProdutosByCategoriaPage from './pages/ProdutosByCategoriaPage';
import ProdutosBySkuPage from './pages/ProdutosBySkuPage';
import RegistrarClientePage from './pages/RegistrarClientePage';
import CategoriasPage from './pages/CategoriasPage';
import PerfilUsuarioPage from './pages/PerfilUsuarioPage';
// Importe outras páginas e componentes

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< HomePage />} />
                <Route path="/login" element={< LoginPage />} />
                <Route path="/registrarProduto" element={< RegisterProductPage />} />
                <Route path="/produtos" element={< ProdutosPage />} />
                <Route path="/produtos/categoria" element={<ProdutosByCategoriaPage />} />
                <Route path="/categorias/" element={<CategoriasPage />} />
                <Route path="/produto/sku" element={<ProdutosBySkuPage />} />
                <Route path="/cliente/registrar" element={<RegistrarClientePage />} />
                <Route path="/cliente/perfil" element={<PerfilUsuarioPage />} />
                {/* Defina outras rotas aqui, usando o atributo 'element' */}
            </Routes>
        </Router>
    );
};

export default App;
