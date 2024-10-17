// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Usando Link para navegação interna

const HomePageRotas = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Explicações Básicas</h1>
            <p className="text-lg text-gray-700 mb-6 text-center">Este sistema tem diferentes funcionalidades dependendo do seu nível de acesso. Siga as instruções abaixo para navegar:</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instruções:</h2>
            <p className="text-gray-700 mb-4">Primeiro, você deve acessar a página de login:</p>
            <ul className="list-disc list-inside mb-6">
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/login">Página de Login</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/login</code></p>
                </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Se você está logado como <strong>Administrador</strong>, pode acessar as seguintes rotas:</h3>
            <ul className="list-disc list-inside mb-6">
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/registrarProduto">Registrar Produto</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/registrarProduto</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/deletarProduto">Deletar Produto</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/deletarProduto</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/registrarCategoria">Registrar Categoria</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/registrarCategoria</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/deleterCategoria">Deletar Categoria</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/deleterCategoria</code></p>
                </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Se você está logado como <strong>Usuário Comum</strong>, pode acessar as seguintes rotas:</h3>
            <ul className="list-disc list-inside mb-6">
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/cliente/perfil">Informações do Cliente</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/cliente/perfil</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/cliente/criarCarrinho">Criar Carrinho</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/cliente/criarCarrinho</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/cliente/adicionarProduto">Adicionar Produto ao Carrinho</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/cliente/adicionarProduto</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/cliente/carrinho">Ver Carrinho</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/cliente/carrinho</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/cliente/deletarCarrinho">Excluir Carrinho</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/cliente/deletarCarrinho</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/cliente/removerProdutoCarrinho">Remover Produto do Carrinho</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/cliente/removerProdutoCarrinho</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/cliente/realizarPedido">Realizar Pedido</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/cliente/realizarPedido</code></p>
                </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Se você <strong>não está logado</strong>, pode acessar as seguintes rotas:</h3>
            <ul className="list-disc list-inside mb-6">
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/produtos">Ver Produtos</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/produtos</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/produtos/categoria">Buscar Produtos por Categoria</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/produtos/categoria</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/categorias">Ver Categorias</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/categorias</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/produto/sku">Buscar Produtos por SKU</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/produto/sku</code></p>
                </li>
                <li className="mb-2">
                    <Link className="text-blue-600 underline" to="/cliente/registrar">Registrar Cliente</Link>
                    <p className="text-gray-600 text-sm">URL: <code>http://localhost:3000/cliente/registrar</code></p>
                </li>
            </ul>
        </div>
    );
};

export default HomePageRotas;
