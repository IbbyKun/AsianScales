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

  useEffect(() => {
    if (pathname) {
      const slug = pathname.split('/').pop(); // Get the last part of the path
      if (slug) {
        const formattedSlug = slug
          .replace(/_/g, ' ') // Replace underscores with spaces
          .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

        // Fetch products from Firebase and find a match
        fetchProducts().then((products) => {
          const matchedProduct = products.find(
            (product) => product.name === formattedSlug
          );
          if (matchedProduct) {
            setProduct(matchedProduct); // Set the matched product in state
            console.log("Product:", matchedProduct);
          }
        });
      }
    }
  }, [pathname]);

  return (
    <div>
      <Navbar />
      {product ? (
        <Details product={product} /> // Pass the matched product to Details
      ) : (
        <p>Loading product details...</p> // Display a loading message until the product is found
      )}
      <Footer />
    </div>
  );
};

export default ContactPage;
