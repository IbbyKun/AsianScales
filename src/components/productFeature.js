'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import logo1 from '../../public/assets/logos/logo1.png';
import logo2 from '../../public/assets/logos/logo2.png';
import logo3 from '../../public/assets/logos/logo3.png';
import logo4 from '../../public/assets/logos/logo4.png';
import logo5 from '../../public/assets/logos/logo5.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductFeatures = ({ product }) => {
  const images = product?.images || []; // Fetch images or default to empty array
  const description = product?.description || ''; // Extract description

  // Split description into lines based on full stop
  const features = description
    ? description.split('.').map((feature) => feature.trim()).filter(Boolean)
    : [];

  // Pair up features into sections
  const featurePairs = [];
  for (let i = 0; i < features.length; i += 2) {
    featurePairs.push(features.slice(i, i + 2)); // Group every two features
  }

  // Array of logos to cycle through
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="p-6 border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Static Features Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Features</h2>

          {/* Loop through feature pairs and display them with logos */}
          {featurePairs.map((pair, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-4">
                {/* Display logos in a cycle */}
                {pair.map((_, logoIndex) => (
                  <Image
                    key={logoIndex}
                    src={logos[logoIndex % logos.length]} // Cycle logos using modulo
                    alt={`Logo ${logoIndex + 1}`}
                    className="w-10 h-10"
                  />
                ))}
              </div>
              <div className="ml-14 text-gray-600">
                {pair.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-black">
                    • {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Image Carousel */}
        <div className="flex items-center justify-center w-full">
          {images.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              spaceBetween={20}
              slidesPerView={1}
              className="w-2/3"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <div className="relative w-48 h-64"> {/* Adjust container size */}
                    <Image
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      className="rounded-lg shadow-md object-contain"
                      fill
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-600 text-center">No images found for this product.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
