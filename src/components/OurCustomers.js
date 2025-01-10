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

const CustomersSection = () => {
  return (
    <div className="relative bg-white py-8 px-4 md:px-16 flex flex-col md:flex-row items-start justify-between">
      {/* Blue rectangle behind the text, hidden on smaller screens */}
      <div className="absolute hidden md:block bg-customBlue h-2/3 w-2/5 top-10 left-0 rounded-r-xl"></div>

      {/* Text section - modified for better mobile responsiveness */}
      <div className="relative z-10 w-full md:w-1/2 py-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-customBlue md:text-white">
          Our Customers Make Us Great
        </h2>
        <p className="mt-4 text-customBlue md:text-white">
          Here at Asian Scales, we focus on markets where technology,
          <br className="hidden md:block" /> innovation, and capital can unlock long-term value.
        </p>
      </div>

      {/* Logos section - modified for 3 items per row on mobile */}
      <div className="w-full md:w-1/2 grid grid-cols-3 md:flex md:flex-wrap justify-center items-start gap-6">
        {companies.map((company, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={company.logo}
              alt={company.name}
              className="h-20 grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-300"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersSection;
