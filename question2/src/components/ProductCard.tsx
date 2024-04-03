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
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">{productName}</h3>
      <p className="text-gray-600">Price: ${price}</p>
      <p className="text-gray-600">Rating: {rating}</p>
      <p className="text-gray-600">Discount: {discount}%</p>
      <p className="text-gray-600">Availability: {availability}</p>
    </div>
  );
};

export default ProductCard;
