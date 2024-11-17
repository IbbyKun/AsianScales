'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import BlogComponent from '../../components/OurBlogs'; // New component
import Footer from '../../components/Footer';

const BlogsPage = () => {
  return (
    <div>
      <Navbar />
      <BlogComponent />
      <Footer />
    </div>
  );
};

export default BlogsPage;
