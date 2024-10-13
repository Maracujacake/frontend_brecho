// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Usando Link para navegação interna

const HomePage = () => {
    return (
        <div>
            <h1>Explicações básicas</h1>
            <p>Este sistema tem diferentes funcionalidades dependendo do seu nível de acesso. Siga as instruções abaixo para navegar:</p>
            
            <h2>Instruções:</h2>
            <p>Primeiro, você deve acessar a página de login:</p>
            <ul>
                <li>
                    <Link to="/login">Página de Login</Link>
                    <p>URL: <code>http://localhost:3000/login</code></p>
                </li>
            </ul>

            <h3>Se você está logado como <strong>Administrador</strong>, pode acessar as seguintes rotas:</h3>
            <ul>
                <li>
                    <Link to="/registrarProduto">Registrar Produto</Link>
                    <p>URL: <code>http://localhost:3000/registrarProduto</code></p>
                </li>
                {/* Adicione outras rotas de administrador aqui */}
            </ul>

            <h3>Se você está logado como <strong>Usuário Comum</strong>, pode acessar as seguintes rotas:</h3>
            <ul>
            <li>
                <Link to="/cliente/perfil">Informações do Cliente</Link>
                <p>URL: <code>http://localhost:3000/cliente/perfil</code></p>
            </li>
            <li>
                <Link to="/cliente/criarCarrinho">Cria carrinho do cliente</Link>
                <p>URL: <code>http://localhost:3000/cliente/criarCarrinho</code></p>
            </li>
            <li>
                <Link to="/cliente/adicionarProduto">Adiciona produto ao carrinho do cliente</Link>
                <p>URL: <code>http://localhost:3000/cliente/adicionarProduto</code></p>
            </li>
            <li>
                <Link to="/cliente/carrinho">Lista os produtos no carrinho do cliente</Link>
                <p>URL: <code>http://localhost:3000/cliente/carrinho</code></p>
            </li>

            </ul>

            <h3>Se você <strong>não está logado</strong>, pode acessar as seguintes rotas:</h3>
            <ul>
                <li>
                    <Link to="/produtos">Ver Produtos</Link>
                    <p>URL: <code>http://localhost:3000/produtos</code></p>
                </li>
                <li>
                    <Link to="/produtos/categoria">Buscar produtos por categoria</Link>
                    <p>URL: <code>http://localhost:3000/produtos/categoria</code></p>
                </li>
                <li>
                    <Link to="/categorias">Lista todas as categorias</Link>
                    <p>URL: <code>http://localhost:3000/categorias</code></p>
                </li>
                <li>
                    <Link to="/produto/sku">Buscar produtos por sku</Link>
                    <p>URL: <code>http://localhost:3000/produto/sku</code></p>
                </li>
                <li>
                    <Link to="/cliente/registrar">Registrar Cliente</Link>
                    <p>URL: <code>http://localhost:3000/cliente/registrar</code></p>
                </li>
            </ul>


        </div>
    );
};

export default HomePage;
