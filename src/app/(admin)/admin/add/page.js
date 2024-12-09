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

  const [isImageLoading, setIsImageLoading] = useState(true);

  // Fetch the blog data for editing if editId is present
  useEffect(() => {
    if (editId) {
      const getBlogData = async () => {
        const blogData = await fetchBlogById(editId);
        setBlog(blogData);
        setIsImageLoading(true);
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

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleDone = async () => {
    let imageUrl = blog.coverImage;

    // If there's a new image (File type), upload it to Cloudinary
    if (blog.coverImage && blog.coverImage instanceof File) {
      const data = new FormData();
      data.append('file', blog.coverImage);
      data.append('upload_preset', 'asianScalesPreset');
      data.append('cloud_name', 'dgyiw2zu8');

      const res = await fetch('https://api.cloudinary.com/v1_1/dgyiw2zu8/image/upload', {
        method: 'POST',
        body: data,
      });
      const uploadedImageURL = await res.json();
      imageUrl = uploadedImageURL.url;
    }

    const blogData = { ...blog, coverImage: imageUrl };

    if (editId) {
      // If editing, update the existing blog
      await updateBlog(editId, blogData);
    } else {
      // If adding, create a new blog
      await addBlog(blogData);
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
        {/* Image Preview Container */}
        {blog.coverImage && !blog.coverImage instanceof File && (
          <div className="mb-4">
            {isImageLoading ? (
              <div className="w-full h-64 flex justify-center items-center">
                <span className="text-lg text-gray-500">Loading...</span>
              </div>
            ) : (
              <div className="w-full h-64 flex justify-center items-center">
                <img
                  src={blog.coverImage}
                  alt="Cover Image"
                  className="w-full h-full object-cover rounded"
                  onLoad={handleImageLoad}
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            )}
            <p className="text-sm text-gray-500">Current Image</p>
          </div>
        )}

        {/* Image input (allow replacing the image) */}
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
