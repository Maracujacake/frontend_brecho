// src/components/Navbar1.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 text-white text-lg">
                    <Link className='underline' to="/">Breshow</Link> {/*nome do site */}
                    <p> (xx)xxxxx-xxxx</p>
                </div>
                <div className = "flex-1 flex justify-center items-center text-white font-bold">
                    <p>Mantenha a roda girando, saiba como <Link className=" underline" to="#">aqui</Link></p>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white font-bold hover:text-gray-300">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar1;
