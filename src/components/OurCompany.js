import React from 'react';
import Image from 'next/image';
import companyImage from '../../public/assets/Images/Gallery1.jpg'; // Use path relative to public directory

const OurCompany = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      {/* Outer Rectangle Layer */}
      <div
        className="relative z-10 md:flex md:items-stretch md:justify-between md:px-8 md:pt-12 md:h-[500px] h-auto w-[90%] "
        style={{
          background:
            'radial-gradient(25.68% 50% at 50% 50%, #EC2226 0%, #07509F 100%)',
          borderRadius: '50px',
        }}
      >
        {/* Inner Rectangle Layer */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'rgba(11, 28, 61, 0.55)',
            borderRadius: '50px',
          }}
        ></div>

        {/* Text on the Left */}
        <div className="relative z-20 md:w-1/2 text-white px-8 md:pt-12 md:flex md:flex-col md:justify-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            <span className="hidden md:inline-block">
              OUR <br />
              COMPANY
            </span>
            <span className="inline-block md:hidden mt-12 text-center">
              OUR COMPANY
            </span>
          </h1>
          <p className="text-lg">
            Here innovation meets reliability in the world of appliances. We
            specialize in Weighing, Automation, and Trading to bring you the
            best in modern technology.
          </p>
        </div>

        {/* Image on the Right */}
        <div className="relative z-20 md:w-1/2 p-4 md:pb-0 flex md:items-end items-center md:h-auto h-64">
          <div className="relative w-full h-full">
            <Image
              src={companyImage}
              alt="Our Company"
              className="object-cover rounded-t-lg md:rounded-tr-lg"
              fill
              style={{
                borderRadius: '20px 20px 0px 0',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
