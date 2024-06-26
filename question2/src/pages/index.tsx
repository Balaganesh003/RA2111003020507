import React, { useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import FilterForm from '../components/FilterForm';

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchProducts = async (filters: { [key: string]: string }) => {
    try {
      const response = await axios.get('/api/products', { params: filters });
      setProducts(response.data);
    } catch (error) {
      setIsError(true);
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-4">
      <h1 className="text-center">Top Products</h1>
      <FilterForm onSubmit={fetchProducts} />
      <ProductList products={products} />
      {isError && (
        <p className="text-red-500 text-center">Error fetching products</p>
      )}
    </div>
  );
};

export default Home;
