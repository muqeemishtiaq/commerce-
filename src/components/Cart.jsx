import React from 'react';

const Cart = ({ cartAllProducts, setCartAllProducts }) => {
  console.log(cartAllProducts);

  const handleIncrement = (id) => {
    setCartAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setCartAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, count: Math.max(1, product.count - 1) }
          : product
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cartAllProducts && cartAllProducts.length > 0 ? (
        <div className="space-y-4">
          {cartAllProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-3 flex items-center w-56"
            >
              <img
                src={product.img}
                alt={product.model}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-3 flex-1">
                <h2 className="text-sm font-semibold">{product.model}</h2>
                <p className="text-xs text-gray-600">{product.brand}</p>
                <p className="text-sm font-bold text-gray-800">${product.price}</p>
                <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-300 text-xs px-2 py-1 rounded"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span className="mx-2 text-sm">{product.count}</span>
                  <button
                    className="bg-gray-300 text-xs px-2 py-1 rounded"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="mt-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => {
                    setCartAllProducts((prevProducts) =>
                      prevProducts.filter((p) => p.id !== product.id)
                    );
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
