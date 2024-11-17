'use client';

import React from 'react';
import Navbar from '../../../components/Navbar';
import Cover from '../../../components/Cover';
import ProductList from '../../../components/productList';
import Footer from '../../../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <Cover
        title="GAS EQUIPMENT"
        subtitle="All Products related to Gas Equipments Category are assembled here"
      />
      <ProductList />
      <Footer />
    </div>
  );
};

export default ContactPage;
