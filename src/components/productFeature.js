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

  // Array of logos to cycle through
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="p-6 border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Static Features Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Features</h2>

          {/* Display each feature individually with a logo */}
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex-shrink-0">
                <Image
                  src={logos[index % logos.length]}
                  alt={`Feature icon ${index + 1}`}
                  className="w-12 h-12  border-gray-200 rounded-lg"
                />
              </div>
              <p className="text-black">
                • {feature}
              </p>
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
                  <div className="relative w-full h-64 flex justify-center items-center"> {/* Adjust container size */}
                    <Image
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      className="rounded-lg shadow-md object-contain" // or object-cover depending on preference
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
