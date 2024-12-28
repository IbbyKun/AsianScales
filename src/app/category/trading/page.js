'use client';

import React from 'react';
import Navbar from '../../../components/Navbar';
import TrendingProducts from '../../../components/TrendingProducts';
import ProductGallery from '../../../components/Gallery';
import Footer from '../../../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div classname="mt-20">
        <TrendingProducts subtitle={false} />
        <ProductGallery subtitle={false} />
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
