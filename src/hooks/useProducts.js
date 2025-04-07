import { useState, useEffect, useCallback, useMemo } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://dummyjson.com/products');
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      if (!data.products || !Array.isArray(data.products)) {
        throw new Error('Invalid data format received from server');
      }
      
      setProducts(data.products);
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    
    const searchLower = searchTerm.toLowerCase();
    return products.filter(product => 
      (product.title?.toLowerCase() || '').includes(searchLower) ||
      (product.description?.toLowerCase() || '').includes(searchLower) ||
      (product.brand?.toLowerCase() || '').includes(searchLower)
    );
  }, [products, searchTerm]);

  return { 
    products: filteredProducts, 
    loading, 
    error, 
    refetch: fetchProducts,
    searchTerm,
    setSearchTerm
  };
};
