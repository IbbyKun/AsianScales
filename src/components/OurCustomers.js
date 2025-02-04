'use client';

import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Ittehad Chemicals Ltd.', logo: 'https://i.ibb.co/dQBCzLk/image-removebg-preview-10.png' },
  { name: 'Pak Atomic Energy Commission', logo: 'https://i.ibb.co/qBMMgzs/image-removebg-preview-9.png' },
  { name: 'Hascol', logo: 'https://i.ibb.co/QNpBK27/image-removebg-preview-8.png' },
  { name: 'Fongas', logo: 'https://i.ibb.co/YPtzR83/image-removebg-preview-7.png' },
  { name: 'Burshane Petroleum', logo: 'https://i.ibb.co/THsz7bv/image-removebg-preview-6.png' },
  { name: 'SSGC', logo: 'https://i.ibb.co/Hr4Dn1S/image-removebg-preview-5.png' },
  { name: 'PSO', logo: 'https://i.ibb.co/WF1YCwM/image-removebg-preview-4.png' },
  { name: 'Parco', logo: 'https://i.ibb.co/W2sHg6z/parco.png' },
];

const CustomerSection = () => {
  return (
    <div className="flex flex-col w-full py-8 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-black">
        MEET OUR PRINCIPLES
      </h2>
      <p className="text-center text-lightGray mb-8 font-light lg:mb-16 sm:text-xl">
        Our principles Speak for our Quality
      </p>
      <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105 flex-shrink-0 w-[280px] sm:w-auto"
            >
              <div className="relative w-full h-28">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mt-4">{company.name}</h3>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-transparent w-12 h-full sm:hidden" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white to-transparent w-12 h-full sm:hidden" />
      </div>
    </div>
  );
};

export default CustomerSection;