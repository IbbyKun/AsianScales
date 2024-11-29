'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Details from '../../components/productDetail';
import Footer from '../../components/Footer';
import { fetchProducts } from '../../../firebaseFunctions';

const ContactPage = () => {
  const pathname = usePathname(); // Use usePathname to get the path
  const [product, setProduct] = useState(null); // State to hold the matched product
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state

  useEffect(() => {
    if (pathname) {
      const slug = pathname.split('/').pop(); // Get the last part of the path
      if (slug) {
        const formattedSlug = slug
          .replace(/_/g, ' ') // Replace underscores with spaces
          .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

        // Fetch products from Firebase and find a match
        fetchProducts()
          .then((products) => {
            const matchedProduct = products.find(
              (product) => product.name === formattedSlug
            );
            if (matchedProduct) {
              setProduct(matchedProduct); // Set the matched product in state
            } else {
              setError(true); // Set error state if no product is found
            }
          })
          .catch(() => setError(true)) // Set error if fetch fails
          .finally(() => setLoading(false)); // Set loading to false once data is fetched
      }
    }
  }, [pathname]);

  if (loading) {
    // Display a custom loading page
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 mt-20"> {/* Add margin-top */}
        <Navbar />
        <div className="text-center p-10">
          <div className="animate-spin mb-4">
            {/* Replace with your spinner component */}
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700">Loading product details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    // Display an error page if no product is found or an error occurred
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 mt-20"> {/* Add margin-top */}
        <Navbar />
        <div className="text-center p-10">
          <p className="text-xl text-red-500 font-semibold">Product not found</p>
          <p className="text-gray-600">We couldn't find the product you're looking for. Please check the URL or try again later.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {product ? (
        <Details product={product} /> // Pass the matched product to Details
      ) : (
        <div className="text-center text-gray-600">No product details available.</div> // Fallback for empty product
      )}
      <Footer />
    </div>
  );
};

export default ContactPage;
