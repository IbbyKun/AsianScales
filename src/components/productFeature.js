import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import logo1 from '../../public/assets/logos/logo1.png';
import logo2 from '../../public/assets/logos/logo2.png';
import logo3 from '../../public/assets/logos/logo3.png';
import logo4 from '../../public/assets/logos/logo4.png';
import logo5 from '../../public/assets/logos/logo5.png';
import productImage1 from '../../public/assets/Images/Gallery1.jpg';
import productImage2 from '../../public/assets/Images/Gallery1.jpg';
import productImage3 from '../../public/assets/Images/Gallery1.jpg';
import Image from 'next/image';

const ProductFeatures = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
  };

  return (
    <div className="p-6 border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Features</h2>

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

        <div className="flex items-center justify-center w-full">
          <Slider {...sliderSettings} className="w-2/3">
            <div>
              <Image
                src={productImage1}
                alt="Product Image 1"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div>
              <Image
                src={productImage2}
                alt="Product Image 2"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div>
              <Image
                src={productImage3}
                alt="Product Image 3"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
