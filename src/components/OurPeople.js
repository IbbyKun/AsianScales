'use client';

import React from 'react';
import Image from 'next/image';
import Person1 from '../../public/assets/Images/person3.jpg';
import Person2 from '../../public/assets/Images/person4.jpg';
import Person3 from '../../public/assets/Images/Person5.jpg';
import Person4 from '../../public/assets/Images/Person6.jpg';
import Person5 from '../../public/assets/Images/person1.jpg';
import Person6 from '../../public/assets/Images/person2.jpg';

const OurPeople = () => {
  const cardData = [
    {
      id: 1,
      image: Person1,
      title: 'Card Title 1',
      text: 'Your sliding text here 1',
    },
    {
      id: 2,
      image: Person2,
      title: 'Card Title 2',
      text: 'Your sliding text here 2',
    },
    {
      id: 3,
      image: Person3,
      title: 'Card Title 3',
      text: 'Your sliding text here 3',
    },
    {
      id: 4,
      image: Person4,
      title: 'Card Title 4',
      text: 'Your sliding text here 4',
    },
    {
      id: 5,
      image: Person5,
      title: 'Card Title 5',
      text: 'Your sliding text here 5',
    },
    {
      id: 6,
      image: Person6,
      title: 'Card Title 6',
      text: 'Your sliding text here 6',
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

      <div className="lg:w-1/2 grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map(({ id, image, title, text }) => (
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
      </div>
    </div>
  );
};

export default OurPeople;
