'use client';

import React from 'react';
import Image from 'next/image';

const OurPeople = () => {
  const cardData = [
    {
      id: 1,
      image: 'https://i.ibb.co/jPRdzc7Y/IMG-5664.jpg',
      title: 'Javaid Iqbal',
      text: 'Founder & CEO',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/v4g24f7W/IMG-5663.jpg',
      title: 'Surriya Javaid',
      text: 'Accounts Manager',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/fYdcWFfw/IMG-5680.jpg',
      title: 'Ali Raza',
      text: 'Sales Head',
    },
    {
      id: 4,
      image: 'https://i.ibb.co/k6gjD1Nx/IMG-5660.jpg',
      title: 'Ahsan Raza',
      text: 'Purchase & Quality Control',
    },
    {
      id: 5,
      image: 'https://i.ibb.co/Q775HVVV/IMG-5659.jpg',
      title: 'Mohsin Raza',
      text: 'Operational Manager',
    },
    {
      id: 6,
      image: 'https://i.ibb.co/q3hHYzWY/IMG-5665.jpg',
      title: 'Asad Raza',
      text: 'R&D Engineer',
    },
    {
      id: 7,
      image: 'https://i.ibb.co/tT16NS8r/IMG-5661.jpg',
      title: 'Maira Mohsin',
      text: 'Business Development Manager',
    },
  ];
  

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start md:px-16 px-4 py-10 mx-auto max-w-[100rem] bg-white">
      {/* Text Section */}
      <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <h2 className="bebas-neue-regular text-customGray text-5xl lg:text-8xl font-bold leading-tight mb-4">
          Our People <br /> is what makes us Great
        </h2>
        <p className="font-century-gothic text-lg lg:text-xl text-gray-600">
          Here we focus on markets where technology, innovation, can unlock
          long-term value.
        </p>
      </div>

      <div className="lg:w-1/2">
        {/* Mobile and Small Screen Layout */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {cardData.map(({ id, image, title, text }, index) => (
            <div
              key={id}
              className="relative h-56 sm:h-56 overflow-hidden rounded-lg bg-gray-200 group"
            >
              <Image
                src={image}
                alt={`Card ${id}`}
                className="h-full w-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <p className="bebas-neue-regular text-lg sm:text-xl">{title}</p>
                <p className="text-sm sm:text-base mt-2">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Medium Screen and Above Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-4">
            {cardData.slice(0, 3).map(({ id, image, title, text }) => (
              <div
                key={id}
                className="relative h-72 overflow-hidden rounded-lg bg-gray-200 group"
              >
                <Image
                  src={image}
                  alt={`Card ${id}`}
                  className="h-full w-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                  <p className="bebas-neue-regular text-2xl">{title}</p>
                  <p className="text-lg mt-2">{text}</p>
                </div>
              </div>
            ))}
            <div className="col-span-3 grid grid-cols-4 gap-2">
              {cardData.slice(3).map(({ id, image, title, text }) => (
                <div
                  key={id}
                  className="relative h-64 overflow-hidden rounded-lg bg-gray-200 group"
                >
                  <Image
                    src={image}
                    alt={`Card ${id}`}
                    className="h-full w-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                    <p className="bebas-neue-regular text-xl">{title}</p>
                    <p className="text-base mt-2">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
