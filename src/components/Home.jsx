import PropTypes from 'prop-types';
import productList from './data';
import toast, { Toaster } from 'react-hot-toast';

const Home = ({ setProductId }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <Toaster position="bottom-right" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productList.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No products available</p>
        ) : (
          productList.map((product) => (
            <div
              key={product.id}
              className="w-80 p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={product.img}
                alt={product.model}
                className="w-full h-60 object-cover rounded"
              />
              <div className="mt-2 flex flex-col items-center text-center">
                <h3 className="text-sm font-semibold">{product.model}</h3>
                <p className="text-xs text-gray-500">{product.brand}</p>
                <p className="text-sm font-bold text-gray-800">Price: ${product.price}</p>
                <p className="text-xs text-gray-500">Color: {product.color}</p>
                <button
                  className="mt-2 bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                  onClick={() => {
                    setProductId(product.id);
                    toast.success('Product');
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  setProductId: PropTypes.func.isRequired,
};

export default Home;
