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

  return (
    <div className="p-6 border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Static Features Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Features</h2>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <Image src={logo1} alt="Icon" className="w-10 h-10" />
            <Image src={logo2} alt="Icon" className="w-10 h-10" />
          </div>
          <div className="ml-14 text-gray-600">
            <p className="text-black">
              • Electric heating with water bath type (Heating medium: water /
              Heat source: electric heater)
            </p>
            <p className="text-black">• Design pressure: 1.77MPa(17bar)</p>
          </div>

          <div className="flex items-center space-x-4">
            <Image src={logo3} alt="Icon" className="w-10 h-10" />
            <Image src={logo4} alt="Icon" className="w-10 h-10" />
          </div>
          <div className="ml-14 text-gray-600">
            <p className="text-black">
              • Explosion proof: Class I, Division 1, Group D & Ex d IIB T4
            </p>
            <p className="text-black">
              • Electric power: 220V 1P 50/60Hz, 220V 3P 50/60Hz, 380V 3P
              50/60Hz
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Image src={logo5} alt="Icon" className="w-10 h-10" />
            <Image src={logo2} alt="Icon" className="w-10 h-10" />
          </div>
          <div className="ml-14 text-gray-600">
            <p className="text-black">
              • High quality and long-life electric heater
            </p>
            <p className="text-black">
              • LPG Pressure safety valve: 1.76MPa(17.6bar)
            </p>
          </div>
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
