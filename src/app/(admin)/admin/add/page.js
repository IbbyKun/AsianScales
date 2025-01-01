'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { auth } from '../../../../../firebase'; // Import Firebase auth
import { addBlog, fetchBlogById, updateBlog } from '../../../../../firebaseFunctions';
import 'react-quill/dist/quill.snow.css';
import Image from 'next/image';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function BlogForm() {
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

  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication

  // Check authentication on mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        router.push('/login'); // Redirect to login if not authenticated
      }
    });
    return () => unsubscribe(); // Cleanup subscription
  }, [router]);

  // Fetch the blog data for editing if editId is present
  useEffect(() => {
    if (isAuthenticated && editId) {
      const getBlogData = async () => {
        const blogData = await fetchBlogById(editId);
        setBlog(blogData);
        setIsImageLoading(true);
      };

      getBlogData();
    }
  }, [editId, isAuthenticated]);

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
      await updateBlog(editId, blogData);
    } else {
      await addBlog(blogData);
    }

    router.push('/admin/dashboard');
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>; // Show loading screen during authentication check
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-black">
        {editId ? 'Edit Blog' : 'Add New Blog'}
      </h1>
      <div className="space-y-4 bg-white p-6 rounded shadow">
        {blog.coverImage && !blog.coverImage instanceof File && (
          <div className="mb-4">
            {isImageLoading ? (
              <div className="w-full h-64 flex justify-center items-center">
                <span className="text-lg text-gray-500">Loading...</span>
              </div>
            ) : (
              <div className="w-full h-64 flex justify-center items-center">
                <Image
                  src={blog.coverImage}
                  alt="Cover Image"
                  className="w-full h-full object-cover rounded"
                  onLoad={handleImageLoad}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
            )}
            <p className="text-sm text-gray-500">Current Image</p>
          </div>
        )}

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

export default function AddBlog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogForm />
    </Suspense>
  );
}
