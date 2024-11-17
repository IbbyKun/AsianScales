'use client';

import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Amazon', logo: '/assets/logos/amazon-logo.png', since: '2016' },
  { name: 'Apple', logo: '/assets/logos/apple-logo.png', since: '2005' },
  { name: 'Google', logo: '/assets/logos/google-logo.png', since: '2019' },
  {
    name: 'Microsoft',
    logo: '/assets/logos/microsoft-logo.png',
    since: '1995',
  },
];

const CompanyCards = () => {
  return (
    <div className="flex flex-col w-full py-8 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-black">
        MEET OUR PARTNERS
      </h2>
      <p className="text-center text-lightGray mb-8 font-light lg:mb-16 sm:text-xl">
        Our partners Speak for our Quality
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-12 lg:px-16">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <Image
              src={company.logo}
              alt={company.name}
              className="mb-4 transition-transform hover:brightness-110"
              width={80}
              height={80}
            />
            <h3 className="text-lg font-semibold">{company.name}</h3>
            <p className="text-gray-500">Customers since {company.since}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCards;
