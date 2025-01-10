'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logos/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/subscribe-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for subscribing!',
        });
        setEmail('');
      } else {
        setStatus({
          type: 'error',
          message: 'Subscription failed. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Asian Scales Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="col-span-1 text-center ml-8">
            <h4 className="font-semibold text-gray-100 font-century-gothic text-center">
              Contact Us
            </h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-center text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  href="tel:+924232147717377"
                  aria-label="Contact number"
                >
                  +92 42 321-4771737
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-center text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  href="tel:+924232147717344"
                  aria-label="Contact number"
                >
                  +92 42 321-4771734
                </a>
              </p>
              <p className="inline-flex gap-x-2 text-center text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200">
                Asians Company, Service Lane, Harbanspura to GT road Near masjid Ayesha, 
                Harbanspura interchange Ring Road, Lahore, Pakistan.
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
                  href="/list/weighing"
                  className="inline-flex gap-x-2 text-gray-400 text-center hover:text-gray-200 focus:outline-none focus:text-gray-200"
                >
                  Weighing
                </Link>
              </p>
              <p>
                <Link
                  href="/list/automation"
                  className="inline-flex gap-x-2 text-gray-400 text-center hover:text-gray-200 focus:outline-none focus:text-gray-200"
                >
                  Automation
                </Link>
              </p>
              <p>
                <Link
                  href="/list/trading"
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
          <div className="col-span-2 px-4 sm:px-0 max-w-md mx-auto w-full">
            <h4 className="font-semibold text-gray-100 text-center font-century-gothic mb-4">
              Stay up to date
            </h4>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
                <div className="flex-1">
                  <label htmlFor="hero-input" className="sr-only">
                    Subscribe
                  </label>
                  <input
                    type="email"
                    id="hero-input"
                    name="hero-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-4 border-transparent rounded-lg sm:rounded-r-none text-sm bg-white text-black focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto whitespace-nowrap py-3 px-6 flex justify-center items-center text-sm font-medium rounded-lg sm:rounded-l-none border border-transparent bg-customBlue text-white hover:bg-black-900 focus:outline-none focus:bg-black disabled:opacity-50 transition-colors duration-200"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {status.message && (
                <p className={`mt-3 text-sm text-center ${
                  status.type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {status.message}
                </p>
              )}
              <p className="mt-3 text-sm text-gray-400 text-center px-4">
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
