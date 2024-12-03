'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function AddBlog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');

  const [blog, setBlog] = useState({
    title: '',
    category: '',
    description: '',
    coverImage: null,
    slug: '',
  });

  // useEffect(() => {
  //   if (editId) {
  //     // Replace this with your actual data fetching logic
  //     const blogToEdit = initialBlogs.find((b) => b.id === parseInt(editId));
  //     if (blogToEdit) {
  //       setBlog({
  //         ...blogToEdit,
  //         coverImage: null, // Maintain existing image handling as needed
  //       });
  //     }
  //   }
  // }, [editId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });

    if (name === 'title') {
      const slugValue = value.toLowerCase().replace(/\s+/g, '');
      setBlog((prev) => ({ ...prev, slug: slugValue }));
    }
  };

  const handleImageChange = (e) => {
    setBlog({ ...blog, coverImage: e.target.files[0] });
  };

  const handleDescriptionChange = (value) => {
    setBlog({ ...blog, description: value });
  };

  const handleDone = () => {
    if (editId) {
      console.log('Blog updated:', blog); // Replace with your backend update call
    } else {
      console.log('Blog added:', blog); // Replace with your backend create call
    }
    router.push('admin/dashboard');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-black">
        {editId ? 'Edit Blog' : 'Add New Blog'}
      </h1>
      <div className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded text-gray-400"
          onChange={handleImageChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded text-black"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          className="w-full p-2 border rounded text-black"
          value={blog.slug}
          onChange={handleInputChange}
          pattern="[a-z]*"
          onKeyPress={(e) => {
            if (!/[a-z]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-2 border rounded text-black"
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
