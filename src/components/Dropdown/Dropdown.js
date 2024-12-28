'use client';

import React from 'react';

const DropdownMenu = ({ isVisible }) => {
  return (
    <div
      className={`fixed top-14 left-0 w-screen bg-[#0B1C3D] p-6 shadow-lg z-20 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="flex justify-between px-12">
        <div className="w-1/3">
          <h3 className="font-bold mb-2">Product Categories</h3>
          <ul>
            <li className="hover:text-gray-400">Weighing</li>
            <li className="hover:text-gray-400">Gas Equipment</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="font-bold mb-2">Our Trending Products</h3>
          <ul>
            <li className="hover:text-gray-400">LPG Filling Machine</li>
            <li className="hover:text-gray-400">Floor and Pallet Scales</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="font-bold mb-2">Services</h3>
          <ul>
            <li className="hover:text-gray-400">Automation</li>
            <li className="hover:text-gray-400">Weighing</li>
            <li className="hover:text-gray-400">Trading</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
