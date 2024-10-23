/*
    Este componente é responsável por exibir as informações de um produto.
    Ele recebe um objeto 'product' como parâmetro e exibe os dados do produto.
    Deve ser reutilizado em outras partes do sistema que exibam informações de produtos.

*/

import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <li>
            <h3>{product.nome}</h3>
            <p>Descrição: {product.descricao}</p>
            <p>Preço: R${product.preco}</p>
            <p>Quantidade: {product.quantidade}</p>
            <p>SKU: {product.sku}</p>
        </li>
    );
};

export default ProductItem;
