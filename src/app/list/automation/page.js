'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Cover from '../../../components/Cover';
import Footer from '../../../components/Footer';
import { fetchProducts } from '../../../../firebaseFunctions';
import ProductList from '../../../components/productList';

const AutomationPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const allProducts = await fetchProducts();
        const automationProducts = allProducts.filter(
          product => product.category?.toLowerCase() === 'automation'
        );
        setProducts(automationProducts);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl">Loading products...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-red-600">{error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Cover
        title="AUTOMATION"
        subtitle="All Products related to Automation Category are assembled here"
      />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default AutomationPage; 