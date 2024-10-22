import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-sky-100 border-b shadow-sm">
      <div className="container mx-auto px-28 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-semibold ml-2">LOGO</NavLink>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <NavLink to="#" className="text-zinc-800 font-semibold hover:text-blue-500">VIP Numbers</NavLink>
            <NavLink to="#" className="text-zinc-800 font-semibold hover:text-blue-500">Common Numbers</NavLink>
            <NavLink to="/history" className="text-zinc-800 font-semibold hover:text-blue-500">Previous Result</NavLink>
            {/* <NavLink to="/login" className="bg-zinc-600 py-2 px-5 rounded text-white font-semibold hover:text-blue-500">Login</NavLink> */}

          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="p-4">
            <li className="py-2"><a href="#" className="text-gray-700 hover:text-blue-500">VIP Numbers</a></li>
            <li className="py-2"><a href="#" className="text-gray-700 hover:text-blue-500">Common Numbers</a></li>
            <li className="py-2"><a href="#" className="text-gray-700 hover:text-blue-500">Result History</a></li>
     
          </ul>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;