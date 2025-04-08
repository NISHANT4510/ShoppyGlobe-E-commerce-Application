import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchProducts, 
  setSearchTerm, 
  selectFilteredProducts,
  selectSearchTerm 
} from '../store/productsSlice';  // Fix import from productsSlice

/**
 * Custom hook for managing products state and search functionality
 * Handles product fetching, filtering, and search operations
 * @returns {Object} Products state and actions
 */
export const useProducts = () => {
  const dispatch = useDispatch();
  // Select filtered products and search state from Redux
  const products = useSelector(selectFilteredProducts);
  const searchTerm = useSelector(selectSearchTerm);
  // Select loading and error states
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Return state and actions
  return {
    products,
    loading,
    error,
    searchTerm,
    setSearchTerm: term => dispatch(setSearchTerm(term)),
    refetch: () => dispatch(fetchProducts())
  };
};
