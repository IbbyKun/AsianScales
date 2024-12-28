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
    animateNumbers(0, 1019000, 2000, setCustomers); // Customers
    animateNumbers(0, 16, 2000, setYears); // Years of experience
    animateNumbers(0, 1128000, 2000, setProducts); // Products delivered
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {customers.toLocaleString()}+
            </h2>
            <p className="text-sm md:text-base">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {years}+
            </h2>
            <p className="text-sm md:text-base">Years Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {products.toLocaleString()}+
            </h2>
            <p className="text-sm md:text-base">Products Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
