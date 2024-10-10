// src/components/ProdutosByCategoria.js
import React, { useState } from 'react';
import axios from 'axios';

const ProductByCategory = () => {
    const [category, setCategory] = useState(''); // Estado para armazenar a categoria
    const [products, setProducts] = useState([]); // Estado para armazenar os produtos
    const [error, setError] = useState(''); // Estado para erros

    // Função para buscar produtos pela categoria
    const fetchProductsByCategory = async (category) => {
        try {
            const response = await axios.get(`http://localhost:8080/breshow/produto/categoria/${category}`);
            setProducts(response.data); // Atualiza o estado com os produtos recebidos
            setError(''); // Limpa erros, se houver
        } catch (err) {
            console.error('Erro ao buscar produtos:', err);
            setError('Erro ao carregar produtos da categoria. Tente novamente mais tarde.');
        }
    };

    // Função chamada ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (category.trim() !== '') {
            fetchProductsByCategory(category);
        } else {
            setError('Por favor, insira uma categoria.');
        }
    };

    return (
        <div>
            <h1>Buscar Produtos por Categoria</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Categoria:</label>
                    <input 
                        type="text" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        placeholder="Insira a categoria"
                        required
                    />
                </div>
                <button type="submit">Buscar Produtos</button>
            </form>

            {/* Exibir produtos */}
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
                <p>Nenhum produto encontrado para essa categoria.</p>
            )}
        </div>
    );
};

export default ProductByCategory;