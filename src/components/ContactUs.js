import React from 'react';
import Image from '../../public/assets/Images/Gallery1.jpg'; // Import the image properly

const ContactUs = () => {
  return (
    <div className="relative max-w-full py-10 lg:py-14 mx-auto bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-1/2 md:h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/Images/Gallery1.jpg')`,
          height: '70vh',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(11, 28, 61, 0.8)',
        }} // Apply the imported image as background
      >
        <p className="mt-24 text-center bebas-neue-regular text-white text-8xl">
          Contact us
        </p>
        <p className="mt-4 text-center font-century-gothic text-lightGray">
          We care for your Feedback. Share with us what’s on your mind
        </p>
        <div
          className="absolute inset-0"
          style={{ opacity: 0.5 }} // Adjust opacity as needed
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto mt-60">
        <form className="bg-[#0B1C3D] p-8 rounded-lg shadow-md">
          {/* Name */}
          <div className="mb-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-black px-4 py-2 rounded bg-white focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black px-4 py-2 rounded bg-white focus:outline-none"
            />
          </div>

          {/* Category */}
          <div className="mb-2">
            <input
              type="text"
              placeholder="Category"
              className="w-full text-black px-4 py-2 rounded bg-white focus:outline-none"
            />
          </div>

          {/* Company and Country */}
          <div className="mb-2 flex gap-4">
            <input
              type="text"
              placeholder="Company"
              className="w-full text-black px-4 py-2 rounded bg-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full text-black px-4 py-2 rounded bg-white focus:outline-none"
            />
          </div>

          {/* Country Code and Phone No */}
          <div className="mb-2 flex gap-4">
            <input
              type="text"
              placeholder="Country Code"
              className="w-full text-black px-4 py-2 rounded bg-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone No"
              className="w-full text-black px-4 py-2 rounded bg-white focus:outline-none"
            />
          </div>

          {/* Your Message */}
          <div className="mb-2">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full text-black px-4 py-2 rounded bg-white focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="relative z-10 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8 bg-[#0B1C3D]">
        {/* Icon Block */}
        <a
          className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
          href="#"
        >
          <svg
            className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Knowledgebase
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              We're here to help with any questions or code.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
              Email
            </p>
          </div>
        </a>
        {/* End Icon Block */}

        {/* Icon Block */}
        <a
          className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
          href="#"
        >
          <svg
            className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              FAQ
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              Search our FAQ for answers to anything you might ask.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
              Phone Number
            </p>
          </div>
        </a>
        {/* End Icon Block */}

        {/* Icon Block */}
        <a
          className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
          href="#"
        >
          <svg
            className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v.01" />
            <path d="M12 8v4" />
          </svg>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Reach Us
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              Got technical questions? Get in touch with us!
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
              Address
            </p>
          </div>
        </a>
        {/* End Icon Block */}
      </div>
    </div>
  );
};

export default ContactUs;