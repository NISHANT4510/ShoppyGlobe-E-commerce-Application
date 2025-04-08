import { createSlice } from '@reduxjs/toolkit';

/**
 * Cart slice for managing shopping cart state
 * Handles adding, removing, and updating cart items
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of cart items with quantity
  },
  reducers: {
    // Add new item or increase quantity of existing item
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove item completely from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Update quantity of specific item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity >= 1) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// Selectors
export const selectCartItems = state => state.cart.items;

// Calculate cart total amount
export const selectCartTotal = state => state.cart.items.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

// Calculate total number of items in cart
export const selectCartItemsCount = state => state.cart.items.reduce(
  (count, item) => count + item.quantity,
  0
);

export default cartSlice.reducer;
