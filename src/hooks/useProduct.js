import { useState, useEffect, useCallback } from 'react';

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!productId) {
        throw new Error('Product ID is required');
      }

      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data || !data.id) {
        throw new Error('Invalid product data received from server');
      }

      setProduct(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch product');
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { product, loading, error, refetch: fetchProduct };
};
