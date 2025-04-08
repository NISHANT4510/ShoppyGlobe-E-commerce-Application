import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Async thunk for fetching all products
 * Makes API call to dummy products endpoint
 */
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.products;
  }
);

/**
 * Async thunk for fetching single product details
 * @param {string} id - Product ID to fetch
 */
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  }
);

/**
 * Products slice for managing product state and search functionality
 */
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],          // All products
    searchTerm: '',     // Current search query
    loading: false,     // Products loading state
    error: null,        // Products error state
    selectedProduct: null,  // Single product details
    productLoading: false, // Single product loading state
    productError: null    // Single product error state
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.productLoading = true;
        state.productError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = action.error.message;
      });
  }
});

export const { setSearchTerm } = productsSlice.actions;

export const selectProducts = state => state.products.items;
export const selectSearchTerm = state => state.products.searchTerm;

/**
 * Filter products based on search term
 * Searches in title, description, and brand
 */
export const selectFilteredProducts = state => {
  const products = state.products.items;
  const searchTerm = state.products.searchTerm.toLowerCase();
  
  if (!searchTerm) return products;
  
  return products.filter(product => 
    (product.title?.toLowerCase() || '').includes(searchTerm) ||
    (product.description?.toLowerCase() || '').includes(searchTerm) ||
    (product.brand?.toLowerCase() || '').includes(searchTerm)
  );
};

export const selectSelectedProduct = state => state.products.selectedProduct;
export const selectProductLoading = state => state.products.productLoading;
export const selectProductError = state => state.products.productError;

export default productsSlice.reducer;
