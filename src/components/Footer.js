import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-sky-100 py-8">
      <div className="container mx-auto px-6 md:px-16 lg:px-28">
        <div className="flex flex-col md:flex-row justify-between gap-0 lg:gap-8" >
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">LOGO</h2>
            <p className="text-gray-700 text-center md:text-left">
              Shillong Teer Result | Best VIP Numbers
            </p>
          </div>

          {/* Links Section 1 */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-gray-900 font-bold mb-4">Link</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Club Chart
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Common Number
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Result History
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Result Calculator
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-gray-900 font-bold mb-4">Link</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Club Chart
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Common Number
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Result History
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Result Calculator
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Privacy Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-gray-900 font-bold mb-4">Privacy</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Teer and Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-700 hover:text-blue-500">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        <p>Copyright © 2024 Shillong Teer Results. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
