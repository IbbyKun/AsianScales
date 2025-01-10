'use client';

import React from 'react';
import Image from 'next/image';
import image1 from '../../public/assets/Images/person1.jpg'; // Replace with actual image
import image2 from '../../public/assets/Images/person2.jpg'; // Replace with actual image
import { useRouter } from 'next/navigation';

const ProductCategories = () => {
  const router = useRouter();
  const categories = [
    {
      title: 'Weighing',
      imgSrc: image1, // Image path
      link: '/list/weighing',
    },
    {
      title: 'Automation',
      imgSrc: image2, // Image path
      link: '/list/automation',
    },
  ];

  return (
    <div className="max-w-full py-12 bg-white">
      {/* Title and Blue Brick Container */}
      <div className="flex items-center justify-between mb-8">
        {/* Title */}
        <h1 className="text-left text-4xl md:text-7xl md:ml-8 ml-4 font-bold text-black">
          PRODUCT <br />
          CATEGORIES
        </h1>

        {/* Blue Brick Section */}
        <div className="bg-customBlue text-white p-6 rounded-l-3xl md:ml-64 sm:ml-40 flex-1 hidden md:block">
          <p className="text-lg">
            Explore our products already divided in categories for your easy
            access.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-8 md:px-64 px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => router.push(category.link)}
          >
            {/* Image */}
            <Image
              src={category.imgSrc}
              alt={category.title}
              className="w-full h-80 object-cover filter grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
              width={400} // Adjust based on layout requirements
              height={320} // Adjust based on layout requirements
            />
            {/* Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition duration-500 ease-in-out group-hover:bg-opacity-0">
              <h2 className="text-white text-3xl font-bold transform transition duration-500 ease-in-out group-hover:scale-110">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
