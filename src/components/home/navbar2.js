// src/components/Navbar2.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar2 = () => {
    const navigate = useNavigate(); // Usando o hook useNavigate

    const handleCartClick = () => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            navigate('/login'); // Redireciona para a página de login se não estiver logado
        } else {
            navigate('/cliente/carrinho'); // Redireciona para o carrinho se estiver logado
        }
    };

    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 text-black-600 text-lg font-bold">
                    <Link to="/produtos/categoria/roupas">roupas</Link>
                    <Link to="/produtos/categoria/casa">casa</Link>
                    <Link to="/produtos/categoria/acessorios">acessórios</Link>
                    <Link to="/produtos/categoria/sapatos">sapatos</Link>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <Link to="/" className="text-black font-bold text-2xl">Breshow</Link>
                </div>

                <div className="flex items-center space-x-6 text-black-600 text-lg">
                    <Link to="#" className="hover:text-black">
                        <FaSearch size={20} />
                    </Link>

                    <Link to="/login" className="hover:text-black">
                        <FaUser size={20} />
                    </Link>

                    {/* Botão do carrinho com onClick */}
                    <button onClick={handleCartClick} className="hover:text-black">
                        <FaShoppingCart size={20} />
                    </button>

                    <button className="hover:text-black">
                        <FaBars size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;
