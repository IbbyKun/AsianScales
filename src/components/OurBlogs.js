import React, { useEffect, useState } from 'react';
import HeroSection from './Cover';
import Image from 'next/image';
import { fetchBlogs } from '../../firebaseFunctions';
import Link from 'next/link';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsData = await fetchBlogs();
      setBlogs(blogsData);
    };
    getBlogs();
  }, []);

  return (
    <div>
      <HeroSection
        title="Our Blog"
        subtitle="All our Blogs are assembled here below"
      />
      <section className="bg-white">
        <div className="py-8 px-8 mx-auto max-w-screen-xl lg:py-16 lg:px-8">
          <div className="grid gap-3 lg:grid-cols-2">
            {blogs.map((post) => (
              <article
                key={post.id}
                className="group p-6 bg-white rounded-lg border border-gray-200 shadow-md transition-colors duration-300 hover:bg-gray-800"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500 group-hover:text-white">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded group-hover:bg-primary-200 group-hover:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    {post.category}
                  </span>
                  <span className="text-sm group-hover:text-white">
                    {post.date}
                  </span>
                </div>
                <h2 className="mb-2 text-4xl font-bold bebas-neue-regular text-gray-900 group-hover:text-white">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h2>
                <div 
                  className="mb-5 font-light text-gray-500 group-hover:text-white"
                  dangerouslySetInnerHTML={{ 
                    __html: post.description
                      .split(' ')
                      .slice(0, 25)
                      .join(' ')
                      .concat(post.description.split(' ').length > 25 ? '...' : '')
                  }}
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    {/* <Image
                      className="w-7 h-7 rounded-full"
                      src={post.authorImage}
                      alt={`${post.author} avatar`}
                      width={28}
                      height={28}
                    /> */}
                    <span className="font-medium group-hover:text-white">
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-black font-medium text-primary-600 hover:underline group-hover:text-white"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
