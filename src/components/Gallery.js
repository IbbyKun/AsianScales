'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageSrc from '../../public/assets/Images/Gallery1.jpg';
import { fetchProducts } from '../../firebaseFunctions';

// Gallery images for when subtitle is true
const galleryImages = [
  { src: "https://i.ibb.co/vvJBXL5P/IMG-4770.png", alt: "Expert Weighing Solutions" },
  { src: "https://i.ibb.co/9fs2FG7/IMG-4776.png", alt: "Focused on Quality" },
  { src: "https://i.ibb.co/BKPvQKF4/IMG-4767.png", alt: "Trusted Trading Partner" },
  { src: "https://i.ibb.co/bRGNXytp/IMG-4751.png", alt: "Innovating Automation" },
  { src: "https://i.ibb.co/3YC8xBBD/IMG-4744.png", alt: "Precision in Action" },
  { src: "https://i.ibb.co/ycWMTTG7/IMG-4761.png", alt: "Dedication at Work" },
];

function Gallery({ subtitle, category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      if (!subtitle && category) {
        try {
          const allProducts = await fetchProducts();
          
          const filteredProducts = allProducts
            .filter(product => 
              product.category?.toLowerCase() === category?.toLowerCase() && 
              product.images && 
              product.images.length > 0
            )
            .slice(0, 6)  // Changed from slice(6, 12) to slice(0, 6) to get first 6 valid products
            .map(product => ({
              src: product.images[0],  // We can safely access first image now
              alt: product.name || 'Product Image'
            }));
          
          setProducts(filteredProducts);
        } catch (error) {
          console.error('Error loading products:', error);
          setProducts([]);
        }
      }
    };

    loadProducts();
  }, [subtitle, category]);

  const displayImages = subtitle ? galleryImages : products;

  return (
    <div className="pb-16 bg-white md:h-screen">
      {subtitle && (
        <div className="text-center pt-16 pb-12">
          <h1 className="text-black font-bold text-6xl lg:text-7xl">
            GALLERY
          </h1>
          <p className="text-lightGray text-base lg:text-lg mt-4 max-w-2xl mx-auto px-8 lg:px-2">
            We are strategists, designers, and developers. Innovators and
            problem solvers. Small enough to be simple and quick, but big enough
            to deliver the scope you want at the pace you need.
          </p>
        </div>
      )}
      {!subtitle && (
        <div className="text-center pt-16 pb-12">
          <h1 className="font-bold text-black text-3xl lg:text-6xl">
            WHAT WE ALSO OFFER
          </h1>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-2 lg:px-20 px-8">
        {/* First large image */}
        <div className="relative h-48 overflow-hidden rounded-lg bg-white lg:col-span-2 group">
          <Image
            src={displayImages[0]?.src || ImageSrc}
            alt={displayImages[0]?.alt || "Your Image"}
            className={`rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75 ${
              subtitle ? 'h-full w-full object-cover' : 'object-contain'
            }`}
            fill
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
          <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <p>{displayImages[0]?.alt || "Your Sliding Text Here"}</p>
          </div>
        </div>

        {/* Middle 4 images */}
        {Array(4)
          .fill()
          .map((_, idx) => (
            <div
              key={idx}
              className="relative h-48 overflow-hidden rounded-lg bg-white group"
            >
              <Image
                src={displayImages[idx + 1]?.src || ImageSrc}
                alt={displayImages[idx + 1]?.alt || "Your Image"}
                className={`rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75 ${
                  subtitle ? 'h-full w-full object-cover' : 'object-contain'
                }`}
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
              <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <p>{displayImages[idx + 1]?.alt || "Your Sliding Text Here"}</p>
              </div>
            </div>
          ))}

        {/* Last large image */}
        <div className="relative h-48 overflow-hidden rounded-lg bg-white lg:col-span-2 group">
          <Image
            src={displayImages[5]?.src || ImageSrc}
            alt={displayImages[5]?.alt || "Your Image"}
            className={`rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75 ${
              subtitle ? 'h-full w-full object-cover' : 'object-contain'
            }`}
            fill
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
          <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <p>{displayImages[5]?.alt || "Your Sliding Text Here"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
