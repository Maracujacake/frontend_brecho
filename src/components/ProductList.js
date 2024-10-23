/*
    Este componente é responsável por listar todos os produtos cadastrados no sistema.
    Ele faz uma requisição à API para buscar os produtos e exibe uma lista com as informações de cada um.
*/

import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import ProductItem from './shared/ProductItem';
import ErrorMessage from './shared/ErrorMessage';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Função para buscar produtos da API
    const fetchProducts = async () => {
        const data = await fetchData('/produto/all', setError, setLoading);
        if (data) {
            setProducts(data);
        }
    };
    
    // Chama a função de buscar produtos ao carregar o componente
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ErrorMessage message={error} />
            {loading && <p>Carregando...</p>}
            {products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ul>
            ) : (
                !loading && <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ProductList;
