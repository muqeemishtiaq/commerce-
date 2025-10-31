import React from 'react';
import productList from './data';
import toast, { Toaster } from 'react-hot-toast';

const Home = ({ setProductId }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <Toaster />
      {productList.map((product) => (
        <div key={product.id} className="w-80 p-6 bg-white shadow-md rounded-lg">
          <img 
            src={product.img} 
            alt={product.model} 
            className="w-full h-60 object-cover rounded" 
          />
          <div className="mt-2 flex flex-col items-center">
            <h2 className="text-sm font-semibold">{product.model}</h2>
            <p className="text-xs text-gray-500">{product.brand}</p>
            <p className="text-sm font-bold text-gray-800">Price: ${product.price}</p>
            {/* <p className="text-xs text-gray-500">Color: {product.color}</p> */}
            <button 
              className="mt-2 bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
              onClick={() => {
                setProductId(product.id);
                toast.success("Product Added Successfully");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
