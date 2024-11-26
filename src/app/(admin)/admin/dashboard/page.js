'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const initialBlogs = [
  { id: 1, title: 'Blog 1', category: 'Tech' },
  { id: 2, title: 'Blog 2', category: 'Lifestyle' },
];

export default function Blogs() {
  const [blogs, setBlogs] = useState(initialBlogs);

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };
  const router = useRouter();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="flex justify-center text-8xl mt-16 mb-12 font-bold text-black">
        Blogs
      </h1>

      <div className="flex justify-end mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => router.push('admin/add')}
        >
          Add New
        </button>
      </div>
      <div className="space-y-4 px-20">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex justify-between items-center p-4 bg-white rounded shadow"
          >
            <div>
              <h2 className="text-lg font-bold text-black">{blog.title}</h2>
              <p className="text-gray-500">{blog.category}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(blog.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
