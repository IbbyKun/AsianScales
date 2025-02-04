'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import serviceImage from '../../public/assets/Images/Gallery1.jpg';

const services = [
  {
    title: 'Weighing',
    description:
      'Water bath Type (Heating Medium: Water Heating Source) Water bath Type (Heating Medium: Water Heating Source)',
    color: 'bg-blue-800',
    image: 'https://i.ibb.co/kVd0M82L/Weighing-service-2.jpg',
    image2:'https://i.ibb.co/20ZnBDJ7/weighing-service.webp',

  },
  {
    title: 'Automation',
    description:
      'Water bath Type (Heating Medium: Water Heating Source) Water bath Type (Heating Medium: Water Heating Source)',
    color: 'bg-red-600',
    image: 'https://i.ibb.co/Z63qpBZG/automation-service.png',
    image2:'https://i.ibb.co/yBsFw8hC/automation-servie.jpg',
  },
  {
    title: 'Trading',
    description:
      'Water bath Type (Heating Medium: Water Heating Source) Water bath Type (Heating Medium: Water Heating Source)',
    color: 'bg-blue-800',
    image: 'https://i.ibb.co/zy12tyw/trading-service-1.jpg',
    image2:'https://i.ibb.co/bgkwtT33/trading-2.jpg',
  },
];

const ServiceTile = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full flex flex-col sm:flex-row h-auto sm:h-64 md:h-80 overflow-hidden">
      {/* Image Section - Show on left for even indexes on desktop, hidden for odd */}
      <div className={`w-full sm:w-1/2 h-48 sm:h-full relative ${!isEven ? 'sm:order-2' : ''}`}>
        <Image
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover absolute"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content Section - Show on right for even indexes on desktop, left for odd */}
      <div
        className={`relative w-full sm:w-1/2 flex items-center ${service.color} p-6 sm:p-8 ${!isEven ? 'sm:order-1' : ''}`}
        style={{
          backgroundImage: `url(${service.image2})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
        }}
      >
        <div className="relative z-10 text-white">
          <Link href={`/services/${service.title.toLowerCase()}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105 hover:underline relative inline-block group">
              {service.title}
            </h2>
          </Link>
          <p className="text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
            {service.description}
          </p>
        </div>

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="max-w-full mx-auto p-4 sm:p-6 bg-white">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          OUR SERVICES
        </h1>
      </div>
      <div className="space-y-4 sm:space-y-0">
        {services.map((service, index) => (
          <div key={index} className="md:px-8">
            <ServiceTile service={service} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
