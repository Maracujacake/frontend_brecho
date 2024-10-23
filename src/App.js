// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterProductPage from './pages/RegisterProduct';
import HomePageRotas from './pages/HomePageRotas';
import ProductListPage from './pages/ProductListPage';
import ProdutosByCategoriaPage from './pages/ProdutosByCategoriaPage';
import ProdutosBySkuPage from './pages/ProdutosBySkuPage';
import RegistrarClientePage from './pages/RegistrarClientePage';
import CategoriesPage from './pages/CategoriesPage';
import PerfilUsuarioPage from './pages/PerfilUsuarioPage';
import CriarCarrinhoPage from './pages/CriarCarrinhoPage';
import AddToCartPage from './pages/AddToCartPage';
import CartItemsPage from './pages/CartItemsPage';
import DeleteCartPage from './pages/DeleteCartPage';
import RemoveProductFromCart from './components/RemoveProductFromCart';
import FinalizeOrderPage from './pages/FinalizeOrderPage';
import RegisterCategoryPage from './pages/RegisterCategoryPage';
import DeleteCategoryPage from './pages/DeleteCategoryPage';
import DeleteProduto from './components/DeleteProduto';
import Navbar1 from './components/home/navbar1';
import Navbar2 from './components/home/navbar2';
import HomePage from './pages/HomePage';
// Importe outras páginas e componentes

const App = () => {
    return (
        <Router>
            <Navbar1 />
            <Navbar2 />
            <Routes>

                <Route path="/" element={< HomePage />} />


                <Route path="/rotas" element={< HomePageRotas />} />
                <Route path="/login" element={< LoginPage />} />
                
                <Route path="/produtos" element={< ProductListPage />} />
                <Route path="/produtos/categoria" element={<ProdutosByCategoriaPage />} />
                <Route path="/produtos/categoria/:categoria" element={<ProdutosByCategoriaPage />} />
                <Route path="/categorias/" element={<CategoriesPage />} />
                <Route path="/produto/sku" element={<ProdutosBySkuPage />} />

                {/* cliente*/}
                <Route path="/cliente/registrar" element={<RegistrarClientePage />} />
                <Route path="/cliente/perfil" element={<PerfilUsuarioPage />} />
                <Route path="/cliente/criarCarrinho" element={<CriarCarrinhoPage />} />
                <Route path="/cliente/adicionarProduto" element={<AddToCartPage />} />
                <Route path="/cliente/carrinho" element={<CartItemsPage />} />
                <Route path="/cliente/deletarCarrinho" element={<DeleteCartPage />} />
                <Route path="/cliente/removerProdutoCarrinho" element={<RemoveProductFromCart />} />
                <Route path="/cliente/realizarPedido" element={<FinalizeOrderPage />} />


                {/* admin */}
                <Route path="/registrarProduto" element={< RegisterProductPage />} />
                <Route path="/deletarProduto" element={< DeleteProduto />} />
                <Route path="/registrarCategoria" element={<RegisterCategoryPage />} />
                <Route path="/deleterCategoria" element={<DeleteCategoryPage />} />
                {/* Defina outras rotas aqui, usando o atributo 'element' */}
            </Routes>
        </Router>
    );
};

export default App;
