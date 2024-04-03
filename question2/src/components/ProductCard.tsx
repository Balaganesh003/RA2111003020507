import React from 'react';

interface Product {
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availability: string;
}

const ProductCard: React.FC<Product> = ({
  productName,
  price,
  rating,
  discount,
  availability,
}) => {
  return (
    <div className="product-card">
      <h3>{productName}</h3>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Discount: {discount}%</p>
      <p>Availability: {availability}</p>
    </div>
  );
};

export default ProductCard;
