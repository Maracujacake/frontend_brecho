// src/components/Banner.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação

const Banner = () => {
    const navigate = useNavigate(); // Hook para redirecionamento

    // Função para redirecionar o usuário para a página da categoria
    const handleCategoryClick = (categoria) => {
        navigate(`/produtos/categoria/${categoria}`); // Redireciona para a rota da categoria
    };

    return (
        <div className="relative w-full h-[300px]">
            {/* Imagem de fundo */}
            <img 
                src='banner.png'
                alt="Banner" 
                className="object-cover w-full h-1/4"
            />

            {/* Texto e botões sobre a imagem */}
            <div className="absolute bottom-20 left-10 text-left">
                <p className="text-blue-500 py-10 text-8xl font-bold">Em alta</p>
                <p className="py-10 text-white text-4xl mt-2 font-bold">Confira nossas novidades</p>

                {/* Botões */}
                <div className="mt-4 space-x-4">
                    <button 
                        className="bg-white text-black font-bold text-2xl py-8 px-16 rounded-md hover:bg-gray-200"
                        onClick={() => handleCategoryClick('feminino')} // Redireciona para a categoria "feminino"
                    >
                        Feminino
                    </button>
                    <button 
                        className="bg-white text-black font-bold text-2xl py-8 px-16 rounded-md hover:bg-gray-200"
                        onClick={() => handleCategoryClick('masculino')} // Redireciona para a categoria "masculino"
                    >
                        Masculino
                    </button>
                    <button 
                        className="bg-white text-black font-bold text-2xl py-8 px-16 rounded-md hover:bg-gray-200"
                        onClick={() => handleCategoryClick('infantil')} // Redireciona para a categoria "infantil"
                    >
                        Infantil
                    </button>
                    <button 
                        className="bg-white text-black font-bold text-2xl py-8 px-16 rounded-md hover:bg-gray-200"
                        onClick={() => handleCategoryClick('unisex')} // Redireciona para a categoria "unisex"
                    >
                        Unisex
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
