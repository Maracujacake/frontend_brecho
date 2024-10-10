// src/components/ListagemProdutos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    // Função para buscar produtos da API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/breshow/produto/all');
            setProducts(response.data); // Salva os produtos no estado
        } catch (err) {
            console.error('Erro ao buscar produtos:', err);
            setError('Erro ao carregar produtos. Tente novamente mais tarde.');
        }
    };

    // Chama a função de buscar produtos ao carregar o componente
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <h3>{product.nome}</h3>
                            <p>Descrição: {product.descricao}</p>
                            <p>Preço: R${product.preco}</p>
                            <p>Quantidade: {product.quantidade}</p>
                            <p>SKU: {product.sku}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ProductList;
