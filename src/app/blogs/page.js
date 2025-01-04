import React from 'react';
import { Metadata } from 'next';
import { fetchBlogs } from '../../../firebaseFunctions';
import Navbar from '../../components/Navbar';
import BlogComponent from '../../components/OurBlogs';
import Footer from '../../components/Footer';

/** @returns {Promise<Metadata>} */
export async function generateMetadata() {
  return {
    title: 'Asian Scales Blog',
    description: 'Discover insights about weighing, automation, and trading solutions',
    openGraph: {
      title: 'Asian Scales Blog',
      description: 'Discover insights about weighing, automation, and trading solutions',
      type: 'website',
    },
  };
}

export default async function BlogsPage() {
  const blogs = await fetchBlogs(); // Server-side fetch

  return (
    <>
      <Navbar />
      <BlogComponent initialBlogs={blogs} />
      <Footer />
    </>
  );
}
