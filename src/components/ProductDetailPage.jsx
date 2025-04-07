import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const dispatch = useDispatch();

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-96 w-full object-cover md:w-96"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <div className="text-2xl text-blue-600 mb-4">
                ${product.price}
              </div>
              <p className="text-gray-600 mb-4">
                Brand: {product.brand}
              </p>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              <button 
                onClick={() => dispatch(addToCart(product))}
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
