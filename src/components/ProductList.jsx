import React from 'react';
import ProductItem from './ProductItem';
import { useProducts } from '../hooks/useProducts';
import ErrorMessage from './ErrorMessage';
import SearchBar from './SearchBar';

const ProductList = () => {
  const { products, loading, error, refetch, searchTerm, setSearchTerm } = useProducts();

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductItem 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
      {products.length === 0 && searchTerm && (
        <div className="text-center text-gray-500 mt-8">
          No products found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default ProductList;
