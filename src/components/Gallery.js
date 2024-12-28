'use client';

import React from 'react';
import Image from 'next/image';
import ImageSrc from '../../public/assets/Images/Gallery1.jpg';

function Gallery({ subtitle }) {
  return (
    <div className="pb-16 bg-white md:h-screen">
      {subtitle && (
        <div className="text-center pt-16 pb-12">
          <h1 className="bebas-neue-regular text-black text-6xl lg:text-8xl">
            Gallery
          </h1>
          <p className="font-century-gothic text-lightGray text-base lg:text-lg mt-4 max-w-2xl mx-auto px-8 lg:px-2">
            We are strategists, designers, and developers. Innovators and
            problem solvers. Small enough to be simple and quick, but big enough
            to deliver the scope you want at the pace you need.
          </p>
        </div>
      )}
      {!subtitle && (
        <div className="text-center pt-16 pb-12">
          <h1 className="font-bold text-black text-3xl lg:text-6xl">
            WHAT WE ALSO OFFER
          </h1>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-2 lg:px-20 px-8">
        <div className="relative h-48 overflow-hidden rounded-lg bg-gray-200 lg:col-span-2 group">
          <Image
            src={ImageSrc}
            alt="Your Image"
            className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75"
            fill
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
          <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <p>Your Sliding Text Here</p>
          </div>
        </div>

        {/* Repeated elements */}
        {Array(4)
          .fill()
          .map((_, idx) => (
            <div
              key={idx}
              className="relative h-48 overflow-hidden rounded-lg bg-gray-200 group"
            >
              <Image
                src={ImageSrc}
                alt="Your Image"
                className="h-full w-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
              <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <p>Your Sliding Text Here</p>
              </div>
            </div>
          ))}
        <div className="relative h-48 overflow-hidden rounded-lg bg-gray-200 lg:col-span-2 group">
          <Image
            src={ImageSrc}
            alt="Your Image"
            className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75"
            fill
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
          <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <p>Your Sliding Text Here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
