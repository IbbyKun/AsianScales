import React from 'react';
import HeroSection from './Cover';
import Link from 'next/link';

const BlogSection = ({ initialBlogs = [] }) => {
  return (
    <div>
      <HeroSection
        title="Our Blog"
        subtitle="All our Blogs are assembled here below"
      />
      <section className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Asian Scales Blog",
              "description": "Discover insightful articles about scales, measurements, and industry insights",
              "blogPost": initialBlogs.map(post => ({
                "@type": "BlogPosting",
                "headline": post.metaTitle || post.title,
                "image": post.coverImage,
                "datePublished": post.date,
                "dateModified": post.lastModified,
                "author": {
                  "@type": "Person",
                  "name": post.author
                },
                "keywords": post.keywords,
                "description": post.metaDescription || post.description?.replace(/<[^>]*>/g, '').slice(0, 155),
                "timeRequired": post.readingTime
              }))
            })
          }}
        />
        <div className="py-4 sm:py-8 px-4 sm:px-8 mx-auto max-w-screen-xl lg:py-16 lg:px-8">
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2">
            {initialBlogs.map((post) => (
              <article
                key={post.id}
                className="group p-4 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-md transition-colors duration-300 hover:bg-gray-800"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-5 text-gray-500 group-hover:text-white">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded group-hover:bg-primary-200 group-hover:text-primary-800 mb-2 sm:mb-0">
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
                <h2 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold bebas-neue-regular text-gray-900 group-hover:text-white">
                  <Link href={`/blogs/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <div 
                  className="mb-3 sm:mb-5 font-light text-sm sm:text-base text-gray-500 group-hover:text-white line-clamp-3 sm:line-clamp-none"
                  dangerouslySetInnerHTML={{ 
                    __html: post.description
                      .split(' ')
                      .slice(0, 25)
                      .join(' ')
                      .concat(post.description.split(' ').length > 25 ? '...' : '')
                  }}
                />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <span className="font-medium text-sm sm:text-base group-hover:text-white">
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-sm sm:text-base text-black font-medium text-primary-600 hover:underline group-hover:text-white"
                  >
                    Read more
                    <svg
                      className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4"
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
