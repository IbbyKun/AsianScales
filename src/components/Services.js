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
    image: serviceImage,
  },
  {
    title: 'Automation',
    description:
      'Water bath Type (Heating Medium: Water Heating Source) Water bath Type (Heating Medium: Water Heating Source)',
    color: 'bg-red-600',
    image: serviceImage,
  },
  {
    title: 'Trading',
    description:
      'Water bath Type (Heating Medium: Water Heating Source) Water bath Type (Heating Medium: Water Heating Source)',
    color: 'bg-blue-800',
    image: serviceImage,
  },
];

const ServiceTile = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden flex">
      {isEven ? (
        <div className="w-1/2 relative">
          <Image
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover absolute"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}

      <div
        className={`relative w-1/2 flex items-center ${service.color} md:p-8 p-4`}
        style={{
          backgroundImage: `url(${service.image.src})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
        }}
      >
        <div className="relative z-10 text-white">
          <Link href={`/services/${service.title.toLowerCase()}`}>
            <h2 className="text-3xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105 hover:underline relative inline-block group">
              {service.title}
            </h2>
          </Link>
          <p>{service.description}</p>
        </div>

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {!isEven ? (
        <div className="w-1/2 relative">
          <Image
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover absolute"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="max-w-full mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          OUR SERVICES
        </h1>
      </div>
      {services.map((service, index) => (
        <div key={index} className="md:px-8">
          <ServiceTile service={service} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
