'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function AddBlog() {
  const router = useRouter();
  const [blog, setBlog] = useState({
    title: '',
    category: '',
    description: '',
    coverImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageChange = (e) => {
    setBlog({ ...blog, coverImage: e.target.files[0] });
  };

  const handleDescriptionChange = (value) => {
    setBlog({ ...blog, description: value });
  };

  const handleDone = () => {
    console.log('Blog added:', blog); // Replace with your backend call
    router.push('admin/dashboard');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-black">Add New Blog</h1>
      <div className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="file"
          className="w-full p-2 border rounded text-gray-400"
          onChange={handleImageChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-2 border rounded"
          onChange={handleInputChange}
        />
        <div>
          <h2 className="text-lg font-semibold mb-2 text-black">Description</h2>
          <ReactQuill
            value={blog.description}
            onChange={handleDescriptionChange}
            className="bg-white text-black"
            theme="snow"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </div>
  );
}
