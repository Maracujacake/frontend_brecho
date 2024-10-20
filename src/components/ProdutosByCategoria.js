// src/components/ProdutosByCategoria.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProdutosByCategoria = () => {
    const { categoria } = useParams(); // Pega a categoria da URL, se houver
    const [category, setCategory] = useState(categoria || ''); // Estado para armazenar a categoria
    const [products, setProducts] = useState([]); // Estado para armazenar os produtos
    const [error, setError] = useState(''); // Estado para erros
    const [loading, setLoading] = useState(false); // Estado para indicar carregamento
    const navigate = useNavigate(); // Para redirecionar se necessário

    // Função para buscar produtos pela categoria
    const fetchProductsByCategory = async (categoryToFetch) => {
        setLoading(true); // Inicia o carregamento
        try {
            const response = await axios.get(`http://localhost:8080/breshow/produto/categoria/${categoryToFetch}`);
            setProducts(response.data); // Atualiza o estado com os produtos recebidos
            setError(''); // Limpa erros, se houver
        } catch (err) {
            console.error('Erro ao buscar produtos:', err);
            setError('Erro ao carregar produtos da categoria. Tente novamente mais tarde.');
        } finally {
            setLoading(false); // Para o carregamento
        }
    };

    // Busca os produtos automaticamente se a categoria estiver na URL
    useEffect(() => {
        if (categoria) {
            fetchProductsByCategory(categoria);
        }
    }, [categoria]); // Executa o efeito sempre que a categoria da URL mudar

    // Função chamada ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (category.trim() !== '') {
            navigate(`/categoria/${category}`); // Redireciona para a URL da categoria
        } else {
            setError('Por favor, insira uma categoria.');
        }
    };

    return (
        <div>
            <h1>Produtos por Categoria</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Formulário para buscar produtos pela categoria */}
            {!categoria && ( // Exibe o formulário apenas se a categoria não vier da URL
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
            )}

            {/* Exibir estado de carregamento */}
            {loading && <p>Carregando produtos...</p>}

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
                !loading && <p>Nenhum produto encontrado para essa categoria.</p> // Mostra mensagem de "nenhum produto" apenas se não estiver carregando
            )}
        </div>
    );
};

export default ProdutosByCategoria;
