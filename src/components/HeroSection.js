'use client';

import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  // States to track the animated numbers
  const [customers, setCustomers] = useState(0);
  const [years, setYears] = useState(0);
  const [products, setProducts] = useState(0);

  // Function to animate numbers
  const animateNumbers = (start, end, duration, setState) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setState(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Trigger number animations when component mounts
  useEffect(() => {
    animateNumbers(0, 500, 2000, setCustomers); // 500+ Satisfied Customers
    animateNumbers(0, 30, 2000, setYears); // 30+ Years Experience
    animateNumbers(0, 1000000, 2000, setProducts); // 1,000,000+ Products Delivered
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/Videos/CoverVideo.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ background: 'rgba(5, 36, 69, 0.76)' }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 py-8 md:py-12">
        {/* Left-aligned heading and subtext */}
        <div className="max-w-5xl md:ml-12 md:text-left text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
            ASIAN AUTOMATION <br />
            CONTROL & SERVICES
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-20 max-w-2xl">
            Here innovation meets reliability in the world of appliances. We
            specialize in Weighing, Automation, and Trading to bring you the
            best in modern technology.
          </p>
        </div>

        {/* Animated Numbers */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3 md:gap-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">{customers}+</h3>
            <p className="text-gray-400">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">{years}+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">
              {products.toLocaleString()}+
            </h3>
            <p className="text-gray-400">Products Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
