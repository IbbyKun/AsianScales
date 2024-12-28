'use client';

import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Airbnb', logo: '/assets/logos/customers/airbnb-logo.svg' },
  { name: 'Google', logo: '/assets/logos/customers/google-logo.svg' },
  { name: 'Microsoft', logo: '/assets/logos/customers/microsoft-logo.svg' },
  { name: 'Spotify', logo: '/assets/logos/customers/spotify-logo.svg' },
  { name: 'Apple', logo: '/assets/logos/customers/apple-logo.svg' },
  { name: 'Mashable', logo: '/assets/logos/customers/mashable-logo.svg' },
  { name: 'Mailchimp', logo: '/assets/logos/customers/mailchimp-logo.svg' },
  { name: 'Slack', logo: '/assets/logos/customers/slack-logo.svg' },
  { name: 'TED', logo: '/assets/logos/customers/ted-logo.svg' },
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
              className="h-12 grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-300"
              width={100}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersSection;
