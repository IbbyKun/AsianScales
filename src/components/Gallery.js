'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageSrc from '../../public/assets/Images/Gallery1.jpg';
import { fetchProducts } from '../../firebaseFunctions';

// Gallery images for when subtitle is true
const galleryImages = [
  { src: "https://i.ibb.co/vvJBXL5P/IMG-4770.png", alt: "Expert Weighing Solutions" },
  { src: "https://i.ibb.co/9fs2FG7/IMG-4776.png", alt: "Focused on Quality" },
  { src: "https://i.ibb.co/BKPvQKF4/IMG-4767.png", alt: "Trusted Trading Partner" },
  { src: "https://i.ibb.co/bRGNXytp/IMG-4751.png", alt: "Innovating Automation" },
  { src: "https://i.ibb.co/3YC8xBBD/IMG-4744.png", alt: "Precision in Action" },
  { src: "https://i.ibb.co/ycWMTTG7/IMG-4761.png", alt: "Dedication at Work" },
];

const weighingGallery = [
  { src: "https://i.ibb.co/d0gZRyNw/IMG-4772.png", alt: "Precision Weighing Equipment" },
  { src: "https://i.ibb.co/4wLDKwPk/IMG-4771.png", alt: "Industrial Scale Solutions" },
  { src: "https://i.ibb.co/mVXBLXgH/IMG-4775.png", alt: "Advanced Weighing Systems" },
  { src: "https://i.ibb.co/dsSHbzvn/IMG-4753.png", alt: "Quality Control Weighing" },
  { src: "https://i.ibb.co/6R495Pdd/IMG-4750.png", alt: "Laboratory Scales" },
  { src: "https://i.ibb.co/ycWMTTG7/IMG-4761.png", alt: "Commercial Weighing Solutions" }
];

const automationGallery = [
  { src: "https://i.ibb.co/4wLDKwPk/IMG-4771.png ", alt: "Automated Control Systems" },
  { src: "https://i.ibb.co/RThXDt58/IMG-4752.png", alt: "Industrial Automation" },
  { src: "https://i.ibb.co/6R495Pdd/IMG-4750.png", alt: "Smart Manufacturing Solutions" },
  { src: "https://i.ibb.co/czhpNqS/IMG-4758.png", alt: "Process Automation" },
  { src: "https://i.ibb.co/M4VnF76/IMG-4755.png", alt: "Automated Production Lines" },
  { src: "https://i.ibb.co/YB8zbJN3/IMG-4748.png", alt: "Control Systems Integration" }
];

const tradingGallery = [
  { src: "https://i.ibb.co/nN7jBR9w/IMG-4756.png", alt: "Global Trading Solutions" },
  { src: "https://i.ibb.co/dsSHbzvn/IMG-4753.png", alt: "International Commerce" },
  { src: "https://i.ibb.co/9kbv0Lny/IMG-4766.png", alt: "Supply Chain Excellence" },
  { src: "https://i.ibb.co/mVXBLXgH/IMG-4775.png", alt: "Quality Trading Products" },
  { src: "https://i.ibb.co/d0gZRyNw/IMG-4772.png", alt: "Business Solutions" },
  { src: "https://i.ibb.co/ccygC4pT/IMG-4746.png", alt: "Trading Partnerships" }
];

function Gallery({ subtitle, category }) {
  const getGalleryByCategory = () => {
    switch (category?.toLowerCase()) {
      case 'weighing':
        return weighingGallery;
      case 'automation':
        return automationGallery;
      case 'trading':
        return tradingGallery;
      default:
        return galleryImages;
    }
  };

  const displayImages = subtitle ? galleryImages : getGalleryByCategory();

  return (
    <div className="pb-16 bg-white md:h-screen">
      {subtitle && (
        <div className="text-center pt-16 pb-12">
          <h1 className="text-black font-bold text-6xl lg:text-7xl">
            GALLERY
          </h1>
          <p className="text-lightGray text-base lg:text-lg mt-4 max-w-2xl mx-auto px-8 lg:px-2">
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
        {/* First large image */}
        <div className="relative h-48 overflow-hidden rounded-lg bg-white lg:col-span-2 group">
          <Image
            src={displayImages[0]?.src || ImageSrc}
            alt={displayImages[0]?.alt || "Your Image"}
            className={`rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75 w-full object-cover'
            }`}
            fill
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
          <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <p>{displayImages[0]?.alt || "Your Sliding Text Here"}</p>
          </div>
        </div>

        {/* Middle 4 images */}
        {Array(4)
          .fill()
          .map((_, idx) => (
            <div
              key={idx}
              className="relative h-48 overflow-hidden rounded-lg bg-white group"
            >
              <Image
                src={displayImages[idx + 1]?.src || ImageSrc}
                alt={displayImages[idx + 1]?.alt || "Your Image"}
                className={`rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75 w-full object-cover'
                }`}
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
              <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <p>{displayImages[idx + 1]?.alt || "Your Sliding Text Here"}</p>
              </div>
            </div>
          ))}

        {/* Last large image */}
        <div className="relative h-48 overflow-hidden rounded-lg bg-white lg:col-span-2 group">
          <Image
            src={displayImages[5]?.src || ImageSrc}
            alt={displayImages[5]?.alt || "Your Image"}
            className={`rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-75 w-full object-cover'
            }`}
            fill
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
          <div className="bebas-neue-regular absolute text-2xl bottom-0 left-0 right-50 p-4 text-center text-white z-20 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <p>{displayImages[5]?.alt || "Your Sliding Text Here"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
