import React from 'react';
// import backgroundImage from '../../public/assets/Images/Gallery1.jpg';

const CoverSection = ({ title, subtitle }) => {
  return (
    <div
      className="relative h-64 md:h-96 w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/Images/Gallery1.jpg')`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(11, 28, 61, 0.8)', // Adjust the shade of blue for the overlay
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">{title}</h1>
        <p className="text-lg font-light text-gray-300 md:text-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CoverSection;
