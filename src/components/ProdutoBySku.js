/* 
    Componente para buscar um produto pelo SKU, provavelmente utilizado pelos administradores do sistema e
    atendententes para verificar informações de um produto específico.

    - "Talvez seja interessante adicionar um botão para deletar/alterar o produto, caso o usuário tenha permissão."
    - "Talvez seja interessante adicionar uma rota similar à esta para buscar um produto pelo nome."
*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';
import ErrorMessage from './shared/ErrorMessage';

const ProductBySKU = () => {
    const [sku, setSku] = useState(''); // Estado para armazenar o SKU
    const [product, setProduct] = useState(null); // Estado para armazenar o produto
    const [error, setError] = useState(''); // Estado para erros

    // Função para buscar produto pelo SKU
    const fetchProductBySKU = async (sku) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/produto/${sku}`);
            setProduct(response.data); // Atualiza o estado com o produto recebido
            setError(''); // Limpa erros, se houver
        } catch (err) {
            console.error('Erro ao buscar produto:', err);
            setError('Erro ao carregar o produto. Verifique o SKU e tente novamente.');
        }
    };

    // Função chamada ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (sku.trim() !== '') {
            fetchProductBySKU(sku);
        } else {
            setError('Por favor, insira um SKU.');
        }
    };

    return (
        <div>
            <h1>Buscar Produto por SKU</h1>
            <ErrorMessage message={error} />

            <form onSubmit={handleSubmit}>
                <div>
                    <label>SKU:</label>
                    <input 
                        type="text" 
                        value={sku} 
                        onChange={(e) => setSku(e.target.value)} 
                        placeholder="Insira o SKU"
                        required
                    />
                </div>
                <button type="submit">Buscar Produto</button>
            </form>

            {/* Exibir produto */}
            {product ? (
                <div>
                    <h3>{product.nome}</h3>
                    <p>Descrição: {product.descricao}</p>
                    <p>Preço: R${product.preco}</p>
                    <p>Quantidade: {product.quantidade}</p>
                    <p>SKU: {product.sku}</p>
                </div>
            ) : (
                <p>Nenhum produto encontrado com esse SKU.</p>
            )}
        </div>
    );
};

export default ProductBySKU;
