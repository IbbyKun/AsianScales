'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchBlogs } from '../../../../firebaseFunctions';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      if (slug) {
        const blogs = await fetchBlogs();
        const currentBlog = blogs.find(blog => blog.slug === slug);
        setBlog(currentBlog);
      }
    };
    getBlog();
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse text-black">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article className="bg-white rounded-lg shadow-sm">
            <header className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full">
                  {blog.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-6 text-gray-900">{blog.title}</h1>

              <div className="flex items-center space-x-4 mb-6">
                {/* <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-gray-100"
                /> */}
                <div>
                  <p className="font-medium text-gray-900">{blog.author}</p>
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                </div>
              </div>

              {blog.coverImage && (
                <div className="relative h-[400px] mb-8">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              )}

              <div 
                className="text-lg text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            </header>

            <div className="prose prose-lg max-w-none">
              {blog.content}
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost; 