'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="mt-auto w-full"
      style={{
        background:
          'radial-gradient(43.43% 50% at 50% 50%, #1E4BA3 0%, #0B1C3D 100%)',
      }}
    >
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 lg:pb-4 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          <div className="col-span-full lg:col-span-1 lg:text-center mt-8">
            <a
              className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
          </div>
          <div className="col-span-1 text-center ml-8">
            <h4 className="font-semibold text-gray-100 font-century-gothic text-center">
              Contact Us
            </h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-center text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  href="tel:0321-1234567"
                  aria-label="Contact number"
                >
                  0321-1234567
                </a>
              </p>
              <p className="inline-flex gap-x-2 text-center text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200">
                Street no. 47, Defence Hailay Tower, Floor 10, Office no. 7
              </p>
            </div>
          </div>
          <div className="col-span-1 text-center ml-8">
            <h4 className="font-semibold text-gray-100 text-center font-century-gothic">
              Useful Links
            </h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  href="/blogs"
                  className="inline-flex gap-x-2 text-gray-400 text-center hover:text-gray-200 focus:outline-none focus:text-gray-200"
                >
                  Blogs
                </Link>
              </p>
              <p>
                <Link
                  href="/weighing"
                  className="inline-flex gap-x-2 text-gray-400 text-center hover:text-gray-200 focus:outline-none focus:text-gray-200"
                >
                  Weighing
                </Link>
              </p>
              <p>
                <Link
                  href="/automation"
                  className="inline-flex gap-x-2 text-gray-400 text-center hover:text-gray-200 focus:outline-none focus:text-gray-200"
                >
                  Automation
                </Link>
              </p>
              <p>
                <Link
                  href="/trading"
                  className="inline-flex gap-x-2 text-gray-400 text-center hover:text-gray-200 focus:outline-none focus:text-gray-200"
                >
                  Trading
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-1 text-center ml-8">
            <h4 className="font-semibold text-gray-100 font-century-gothic text-center">
              Social
            </h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100 text-center font-century-gothic">
              Stay up to date
            </h4>
            <form>
              <div className="mt-4 flex flex-col sm:flex-row w-full">
                <div className="w-full sm:flex-1">
                  <label htmlFor="hero-input" className="sr-only">
                    Subscribe
                  </label>
                  <input
                    type="email"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-l-lg text-sm bg-white text-black focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-r-lg border border-transparent bg-customBlue text-white hover:bg-black-900 focus:outline-none focus:bg-black"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-400 text-center">
                We care about the protection of your data.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-5 lg:mt-24 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Asian Scales. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-x-16">
            <Link
              href="/terms"
              className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-neutral-400 hover:text-white focus:outline-none"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-neutral-400 hover:text-white focus:outline-none"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
