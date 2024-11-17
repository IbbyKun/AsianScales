'use client';

import React, { useState } from 'react';
import { FaHome, FaProductHunt, FaBlogger, FaPhone } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image'; 
import logo from '../../public/assets/logos/logo.png';
import DropdownMenu from '../components/Dropdown/Dropdown'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle product dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when not needed
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1C3D] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            className="h-8 md:h-12"
            height={50}
            width={50}
          />
        </div>

        {/* Desktop Menu */}
        <div className="w-full mx-auto flex items-center justify-center p-4">
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="/"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <FaHome />
              <span>Home</span>
            </a>

            <div
              className="relative group"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FaProductHunt />
                <span>Products</span>
              </a>
            </div>

            <a
              href="/blogs"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <FaBlogger />
              <span>Blogs</span>
            </a>
            <a
              href="/contact"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <FaPhone />
              <span>Contact Us</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Render Dropdown */}
      {!isMobileMenuOpen && <DropdownMenu isVisible={isDropdownOpen} />}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B1C3D] text-white p-4 space-y-4">
          <a
            href="/"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FaHome />
            <span>Home</span>
          </a>
          <div className="relative">
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-gray-400"
              onClick={toggleDropdown}
            >
              <FaProductHunt />
              <span>Products</span>
            </a>
            {/* Mobile Dropdown */}
            {isDropdownOpen && (
              <div className="mt-2 bg-[#0B1C3D] p-4 rounded shadow-lg space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Product Categories</h3>
                  <ul>
                    <li className="hover:text-gray-400">Weighing</li>
                    <li className="hover:text-gray-400">Gas Equipment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Our Trending Products</h3>
                  <ul>
                    <li className="hover:text-gray-400">LPG Filling Machine</li>
                    <li className="hover:text-gray-400">
                      Floor and Pallet Scales
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Services</h3>
                  <ul>
                    <li className="hover:text-gray-400">Automation</li>
                    <li className="hover:text-gray-400">Weighing</li>
                    <li className="hover:text-gray-400">Trading</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <a
            href="/blogs"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FaBlogger />
            <span>Blogs</span>
          </a>
          <a
            href="/contact"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FaPhone />
            <span>Contact Us</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
