import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <img 
        src={product.thumbnail || product.images[0]} 
        alt={product.title} 
        className="w-full h-48 object-cover mb-2 rounded" 
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
      <button 
        onClick={handleAddToCart}
        className="w-full mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
