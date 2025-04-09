import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../store/cartSlice';

const Header = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ShoppyGlobe</Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/" className="hover:text-gray-300">Products</Link>
          <Link to="/cart" className="relative">
            <span className="material-icons">shopping_cart</span>
            <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cartItemsCount}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
