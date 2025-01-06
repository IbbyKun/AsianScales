import React from 'react';
import { Metadata } from 'next';
import { fetchBlogs } from '../../../firebaseFunctions';
import Navbar from '../../components/Navbar';
import BlogComponent from '../../components/OurBlogs';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Asian Scales Blog',
  description: 'Discover insights about weighing, automation, and trading solutions',
  openGraph: {
    title: 'Asian Scales Blog',
    description: 'Discover insights about weighing, automation, and trading solutions',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://asian-scales.vercel.app',
  },
};

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  return (
    <>
      <Navbar />
      <BlogComponent initialBlogs={blogs} />
      <Footer />
    </>
  );
}
