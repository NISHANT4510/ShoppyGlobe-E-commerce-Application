import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { selectCartItems, selectCartTotal } from '../store/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/" className="text-blue-500 hover:text-blue-600">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="text-xl font-bold">
          Total: ${cartTotal.toFixed(2)}
        </div>
        <button 
          onClick={() => navigate('/checkout')}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
