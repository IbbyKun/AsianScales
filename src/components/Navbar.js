'use client';

import React, { useState } from 'react';
import { FaHome, FaProductHunt, FaBlogger, FaPhone } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../../public/assets/logos/logo.png';
import DropdownMenu from '../components/Dropdown/Dropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Toggle product dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when not needed
  // const closeDropdown = () => {
  //   setIsDropdownOpen(false);
  // };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Dropdown positioned behind navbar */}
      {isDropdownOpen && (
        <div
          className="fixed top-0 left-0 right-0 bg-[#0B1C3D] border-t border-gray-700 shadow-lg z-[40] animate-slideDown"
          style={{ width: '100vw' }}
        >
          <div className="max-w-7xl mx-auto p-12 pt-24">
            {/* Animated Logo in Dropdown */}
            <div className="absolute left-24 top-28 scale-150 transition-all duration-300">
              <Image
                src={logo}
                alt="Logo"
                className="h-12 md:h-16"
                height={70}
                width={70}
              />
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-3 gap-8 ml-48">
              <div>
                <h3 className="font-bold text-lg mb-4 text-white">
                  Product Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/list/weighing"
                      className="text-white hover:text-gray-400 cursor-pointer"
                    >
                      Weighing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/list/automation"
                      className="text-white hover:text-gray-400 cursor-pointer"
                    >
                      Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/list/trading"
                      className="text-white hover:text-gray-400 cursor-pointer"
                    >
                      Trading
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-white">
                  Our Trending Products
                </h3>
                <ul className="space-y-2">
                  <li
                    onClick={() =>
                      router.push(
                        '/automatic_lpg_cylinder_filling_machine_(complete)'
                      )
                    }
                    className="text-white hover:text-gray-400 cursor-pointer"
                  >
                    LPG Filling Machine
                  </li>
                  <li
                    onClick={() => router.push('/pallet_scale')}
                    className="text-white hover:text-gray-400 cursor-pointer"
                  >
                    Floor and Pallet Scales
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
                <ul className="space-y-2">
                  <li
                    onClick={() => router.push('/services/automation')}
                    className="text-white hover:text-gray-400 cursor-pointer"
                  >
                    Automation
                  </li>
                  <li
                    onClick={() => router.push('/services/weighing')}
                    className="text-white hover:text-gray-400 cursor-pointer"
                  >
                    Weighing
                  </li>
                  <li
                    onClick={() => router.push('/services/trading')}
                    className="text-white hover:text-gray-400 cursor-pointer"
                  >
                    Trading
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar on top */}
      <nav className="fixed top-0 left-0 w-full z-[60] bg-[#0B1C3D] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 relative">
          {/* Logo */}
          <div className="flex items-center transition-all duration-300">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="h-8 md:h-12"
              height={50}
              width={50}
            />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-full mx-auto items-center justify-center p-4">
            <div className="flex space-x-8 items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FaHome />
                <span>Home</span>
              </Link>

              <div className="relative group" onClick={toggleDropdown}>
                <Link
                  href="#"
                  className="flex items-center space-x-2 hover:text-gray-400"
                >
                  <FaProductHunt />
                  <span>Products</span>
                </Link>
              </div>

              <Link
                href="/blogs"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FaBlogger />
                <span>Blogs</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FaPhone />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <AiOutlineClose className="text-3xl" />
              ) : (
                <AiOutlineMenu className="text-3xl" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B1C3D] text-white p-4 space-y-4 border-t border-gray-700 shadow-lg">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FaHome />
                <span>Home</span>
              </Link>

              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 hover:text-gray-400 w-full"
              >
                <FaProductHunt />
                <span>Products</span>
              </button>

              {/* Mobile Products Dropdown */}
              {isDropdownOpen && (
                <div className="pl-4 space-y-4 border-l border-gray-700">
                  <div>
                    <h3 className="font-bold mb-2 text-sm text-white">
                      Product Categories
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/list/weighing"
                          className="text-white hover:text-gray-400"
                        >
                          Weighing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/list/gas"
                          className="text-white hover:text-gray-400"
                        >
                          Gas Equipment
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/list/automation"
                          className="text-white hover:text-gray-400"
                        >
                          Automation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/list/trading"
                          className="text-white hover:text-gray-400"
                        >
                          Trading
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-sm text-white">
                      Trending Products
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/automatic_lpg_cylinder_filling_machine_(complete)"
                          className="text-white hover:text-gray-400"
                        >
                          LPG Filling Machine
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pallet_scale"
                          className="text-white hover:text-gray-400"
                        >
                          Floor and Pallet Scales
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2 text-sm text-white">
                      Services
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/services/automation"
                          className="text-white hover:text-gray-400"
                        >
                          Automation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/weighing"
                          className="text-white hover:text-gray-400"
                        >
                          Weighing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/trading"
                          className="text-white hover:text-gray-400"
                        >
                          Trading
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <Link
                href="/blogs"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FaBlogger />
                <span>Blogs</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FaPhone />
                <span>Contact Us</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
