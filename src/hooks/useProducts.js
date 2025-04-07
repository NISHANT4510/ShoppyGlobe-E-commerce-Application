import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchProducts, 
  setSearchTerm, 
  selectFilteredProducts,
  selectSearchTerm 
} from '../store/productsSlice';

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const searchTerm = useSelector(selectSearchTerm);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return {
    products,
    loading,
    error,
    searchTerm,
    setSearchTerm: term => dispatch(setSearchTerm(term)),
    refetch: () => dispatch(fetchProducts())
  };
};
