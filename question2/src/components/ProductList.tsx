import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availability: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
