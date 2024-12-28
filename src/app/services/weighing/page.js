'use client';

import React from 'react';
import Navbar from '../../../components/Navbar';
import TrendingProducts from '../../../components/TrendingProducts';
import ProductGallery from '../../../components/Gallery';
import Footer from '../../../components/Footer';

const WeighingServicePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <TrendingProducts subtitle={false} />
        <ProductGallery subtitle={false} />
        <Footer />
      </div>
    </div>
  );
};

export default WeighingServicePage; 