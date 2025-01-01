'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../../../../firebase'; 
import { fetchBlogs, deleteBlog } from '../../../../../firebaseFunctions';
import { signOut } from 'firebase/auth'; 

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        router.push('/admin/login');
      }
    });
    return () => unsubscribe(); 
  }, [router]);

  useEffect(() => {
    if (isAuthenticated) {
      const getBlogs = async () => {
        const blogsData = await fetchBlogs();
        setBlogs(blogsData);
      };
      getBlogs();
    }
  }, [isAuthenticated]);

  const handleDelete = async (id) => {
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id)); 
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      router.push('/admin/login'); 
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-8xl mt-16 mb-12 font-bold text-black">Blogs</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

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
  );
}
