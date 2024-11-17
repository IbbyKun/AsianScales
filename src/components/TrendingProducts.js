'use client';

import React from 'react';
import Image from 'next/image';
import image1 from '../../public/assets/images/Gallery1.jpg';
import image2 from '../../public/assets/Images/Gallery1.jpg';

const TrendingProducts = ({ subtitle }) => {
  const products = [
    {
      title: 'GAS FILLING MACHINE',
      description:
        'Water bath Type (Heating Medium : Water Heating Source) Water bath Type (Heating Medium : Water Heating Source) Water bath Type (Heating Medium : Water Heating Source) Water bath Type (Heating Medium : Water Heating Source) Water bath Type (Heating Medium : Water Heating Source)',
      imgSrc: image1,
    },
    {
      title: 'FLOOR & PALET SCALES',
      description:
        'Water bath Type (Heating Medium : Water Heating Source) Water bath Type (Heating Medium : Water Heating Source) Water bath Type (Heating Medium : Water Heating Source) Water bath Type (Heating Medium : Water Heating Source) Water bath Type (Heating Medium : Water Heating Source)',
      imgSrc: image2,
    },
  ];

  return (
    <div className="w-full py-12 px-4 bg-white">
      {subtitle && (
        <div>
          <h1 className="text-center text-3xl md:text-6xl font-bold mb-4 text-black">
            Trending Products
          </h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            Check out our Trending Products at this Moment
          </p>
        </div>
      )}

      {products.map((product, index) => (
        <div key={index} className="mb-8 md:px-16">
          <div className="relative bg-white rounded-lg shadow-md">
            {/* Image */}
            <Image
              src={product.imgSrc}
              alt={product.title}
              className="w-full h-72 object-cover rounded-t-lg"
              width={800} // Adjust width based on your layout
              height={300} // Adjust height based on your layout
            />
            {/* Content */}
            <div className="grid grid-cols-2 gap-4 bg-customBlue text-white p-6 rounded-b-lg">
              {/* Left side: Product title */}
              <div className="flex flex-col md:justify-center justify-start mt-9 md:mt-0">
                <h2 className="text-4xl md:text-6xl mt-4 font-bold">
                  {product.title}
                </h2>
              </div>
              {/* Right side: Description + buttons */}
              <div className="flex flex-col justify-between">
                <p className="text-sm mt-12">{product.description}</p>
                <div className="flex justify-end mt-12 space-x-4">
                  <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md">
                    Details
                  </button>
                  <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md">
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingProducts;
