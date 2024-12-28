'use client';

import React from 'react';
import Image from 'next/image';
import videoThumbnail1 from '../../public/assets/Images/Gallery1.jpg'; // Replace with actual thumbnail image
import videoThumbnail2 from '../../public/assets/Images/Gallery1.jpg'; // Replace with actual thumbnail image
import videoThumbnail3 from '../../public/assets/Images/Gallery1.jpg'; // Replace with actual thumbnail image

const Testimonials = () => {
  const testimonials = [
    {
      title: 'Inga Ludwig Ogilvie',
      role: 'Film Producer & Marketing Executive',
      imgSrc: videoThumbnail1,
      videoUrl: 'https://www.youtube.com/watch?v=example1',
    },
    {
      title: 'Inga Ludwig Ogilvie',
      role: 'Film Producer & Marketing Executive',
      imgSrc: videoThumbnail2,
      videoUrl: 'https://www.youtube.com/watch?v=example2',
    },
    {
      title: 'Inga Ludwig Ogilvie',
      role: 'Film Producer & Marketing Executive',
      imgSrc: videoThumbnail3,
      videoUrl: 'https://www.youtube.com/watch?v=example3',
    },
  ];

  return (
    <div className="max-w-full py-12 bg-white">
      {/* Title and Blue Brick Container */}
      <div className="flex items-center justify-between mb-8">
        {/* Title */}
        <h1 className="md:text-left md:ml-8 ml-4 text-center text-4xl md:text-7xl sm:text-5xl font-bold text-black">
          TESTIMONIALS
        </h1>

        {/* Blue Brick Section */}
        <div className="bg-customBlue ml-40 text-white px-6 py-12 rounded-l-3xl flex-1 hidden md:block">
          <p className="text-lg">Look what our Clients have to say for us</p>
        </div>
      </div>

      {/* Testimonials Videos */}
      <div className="md:mx-40 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:grid-rows-2">
          {/* First large video */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer md:col-span-2 md:row-span-2">
            <Image
              src={testimonials[0].imgSrc}
              alt={testimonials[0].title}
              className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
              fill
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition duration-500 ease-in-out group-hover:bg-opacity-30">
              <a
                href={testimonials[0].videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-white bg-red-600 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-6.34-3.695A1 1 0 007 8.256v7.488a1 1 0 001.412.914l6.34-3.695a1 1 0 000-1.828z"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4">
              <h2 className="text-xl font-bold">{testimonials[0].title}</h2>
              <p className="text-sm">{testimonials[0].role}</p>
            </div>
          </div>

          {/* Second and third smaller videos stacked vertically */}
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index + 1}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <Image
                src={testimonial.imgSrc}
                alt={testimonial.title}
                className="w-full h-48 object-cover transition duration-500 ease-in-out group-hover:scale-105"
                width={400} // Adjust dimensions based on your layout
                height={200}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition duration-500 ease-in-out group-hover:bg-opacity-30">
                <a
                  href={testimonial.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white bg-red-600 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-6.34-3.695A1 1 0 007 8.256v7.488a1 1 0 001.412.914l6.34-3.695a1 1 0 000-1.828z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4">
                <h2 className="text-xl font-bold">{testimonial.title}</h2>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
