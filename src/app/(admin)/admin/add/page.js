'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { addBlog, fetchBlogById, updateBlog } from '../../../../../firebaseFunctions';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function AddBlog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit'); // Get the blog ID for editing

  const [blog, setBlog] = useState({
    title: '',
    category: '',
    description: '',
    coverImage: null,
    slug: '',
  });

  // Fetch the blog data for editing if editId is present
  useEffect(() => {
    if (editId) {
      const getBlogData = async () => {
        const blogData = await fetchBlogById(editId); // Fetch blog by ID
        setBlog(blogData); // Populate form fields with existing blog data
      };

      getBlogData();
    }
  }, [editId]);

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

  const handleDone = async () => {
    if (editId) {
      // If editing, update the existing blog
      await updateBlog(editId, blog);
    } else {
      // If adding, create a new blog
      await addBlog(blog);
    }

    // Redirect to the dashboard after saving the blog
    router.push('/admin/dashboard');
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
          disabled={editId} // Disable image upload during editing (optional)
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded text-black"
          value={blog.title}
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
          value={blog.category}
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
