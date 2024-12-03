'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { blogPosts } from '../../../components/OurBlogs';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <Navbar />
      <main className="pt-20 pb-16 lg:pt-24 lg:pb-24 bg-white">
        <div className="flex justify-center px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
            {post.image && (
              <div className="relative w-full h-[400px] mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-6">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <Image
                    className="mr-4 w-16 h-16 rounded-full"
                    src={post.authorImage}
                    alt={post.author}
                    width={64}
                    height={64}
                  />
                  <div>
                    <a className="text-xl font-bold text-gray-900">{post.author}</a>
                    <p className="text-base text-gray-500">{post.date}</p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                {post.title}
              </h1>
            </header>
            
            <div className="prose max-w-none">
              {post.content}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost; 