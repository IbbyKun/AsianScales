'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { fetchBlogs, deleteBlog } from '../../../../../firebaseFunctions'; // Import the functions

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  // Fetch blogs when the component mounts
  useEffect(() => {
    const getBlogs = async () => {
      const blogsData = await fetchBlogs();
      setBlogs(blogsData);
    };
    getBlogs();
  }, []);

  const handleDelete = async (id) => {
    // Delete the blog and update the state
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove from the UI
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="flex justify-center text-8xl mt-16 mb-12 font-bold text-black">
        Blogs
      </h1>

      <div className="flex justify-end mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => router.push('/admin/add')}
        >
          Add New
        </button>
      </div>

      <div className="space-y-4 px-20">
        {blogs.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex justify-between items-center p-4 bg-white rounded shadow"
            >
              <div>
                <h2 className="text-lg font-bold text-black">{blog.title}</h2>
                <p className="text-gray-500">{blog.category}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => router.push(`/admin/add?edit=${blog.id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      </div>
      </Suspense>
  );
}
