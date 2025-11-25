import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <div>
      <div className="p-5 bg-yellow-500 text-white flex justify-between items-center">
        <ul className="flex gap-8 text-xl">
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="relative">
          <NavLink to="/cart" className="cursor-pointer">
            <i className="fa-solid fa-cart-shopping text-xl" />
          </NavLink>
        
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
            {cartCount}

          </span>
          
            
          
        </div>
      </div>
    </div>
  );
};

export default Header;
