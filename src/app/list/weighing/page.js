'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Cover from '../../../components/Cover';
import Footer from '../../../components/Footer';
import { fetchProducts } from '../../../../firebaseFunctions';
import ProductList from '../../../components/productList';

const WeighingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const allProducts = await fetchProducts();
        // Filter products for Weighing category (case-insensitive)
        const weighingProducts = allProducts.filter(
          product => product.category?.toLowerCase() === 'weighing'
        );
        setProducts(weighingProducts);
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
        title="WEIGHING"
        subtitle="All Products related to Weighing Category are assembled here"
      />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default WeighingPage;
