'use client';

import React from 'react';
import Navbar from '../../../components/Navbar';
import TrendingProducts from '../../../components/TrendingProducts';
import ProductGallery from '../../../components/Gallery';
import Footer from '../../../components/Footer';

const TradingServicePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <TrendingProducts subtitle={false} />
        <ProductGallery subtitle={false} category="trading"/>
        <Footer />
      </div>
    </div>
  );
};

export default TradingServicePage; 