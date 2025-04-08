import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <img 
        src={item.thumbnail || item.images[0]} 
        alt={item.title} 
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button 
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
      </div>
      <button 
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 hover:text-red-600"
      >
        <span className="material-icons">delete</span>
      </button>
    </div>
  );
};

export default CartItem;
