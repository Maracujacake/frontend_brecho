// src/components/Navbar2.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa'; // Ícones para busca, perfil, carrinho e menu

const Navbar2 = () => {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="flex items-center space-x-4 text-black-600 text-lg font-bold">
                    <Link to="/roupas">roupas</Link>
                    <Link to="/casa">casa</Link>
                    <Link to="/acessorios">acessórios</Link>
                    <Link to="/sapatos">sapatos</Link>
                </div>

                
                <div className="flex-1 flex justify-center items-center">
                    <Link to="/" className="text-black font-bold text-2xl">Breshow</Link>
                </div>

                {/* Botões à direita */}
                <div className="flex items-center space-x-6 text-black-600 text-lg">
                    {/* Botão de busca */}
                    <Link to="#" className="hover:text-black">
                        <FaSearch size={20} />
                    </Link>

                    {/* Botão de login/perfil */}
                    <Link to="#" className="hover:text-black">
                        <FaUser size={20} />
                    </Link>

                    {/* Botão do carrinho */}
                    <Link to="#" className="hover:text-black">
                        <FaShoppingCart size={20} />
                    </Link>

                    {/* Menu de hambúrguer */}
                    <button className="hover:text-black">
                        <FaBars size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;
