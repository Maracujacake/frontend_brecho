// src/components/Banner.js
import React from 'react';

const Banner = () => {
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
                <p className=" py-10 text-white text-4xl mt-2 font-bold">Confira nossas novidades</p>

                {/* Botões */}
                <div className="mt-4 space-x-4">
                    <button className="bg-white text-black font-bold text-2xl py-8 px-16 rounded-md hover:bg-gray-200">Feminino</button>
                    <button className="bg-white text-black font-bold text-2xl py-8 px-16 rounded-md hover:bg-gray-200">Masculino</button>
                    <button className="bg-white text-black font-bold text-2xl py-8 px-16 rounded-md hover:bg-gray-200">Infantil</button>
                    <button className="bg-white text-black font-bold text-2xl py-8 px-16 rounded-md hover:bg-gray-200">Unisex</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
