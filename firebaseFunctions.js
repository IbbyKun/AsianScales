import {
  getDatabase,
  ref,
  get,
  child,
  update,
  remove,
  push,
  set
} from "firebase/database";
import { app } from "./firebase";

export const fetchProducts = async () => {
  const db = getDatabase(app);
  const dbRef = ref(db);

  try {
    const snapshot = await get(child(dbRef, "products"));
    if (snapshot.exists()) {
      const products = snapshot.val();
      // Convert the products object to an array for easier usage
      return Object.values(products);
    } else {
      console.error("No products found in the database.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Function to add a new blog
export const addBlog = async (blogData) => {
  const db = getDatabase(app);
  const blogId = new Date().getTime();
  const blogRef = ref(db, "blogs/" + blogId);

  // Add SEO-friendly fields
  const enhancedBlogData = {
    ...blogData,
    date: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    metaTitle: blogData.metaTitle || blogData.title,
    metaDescription: blogData.metaDescription || blogData.description?.replace(/<[^>]*>/g, '').slice(0, 155),
    keywords: blogData.keywords || generateKeywords(blogData.title, blogData.category),
    readingTime: blogData.readingTime || calculateReadingTime(blogData.description),
    author: blogData.author || 'Asian Scales Team',
    excerpt: blogData.description?.replace(/<[^>]*>/g, '').slice(0, 155),
  };

  try {
    await set(blogRef, enhancedBlogData);
    console.log("Blog successfully added");
  } catch (error) {
    console.error("Error adding blog:", error);
  }
};

// Helper functions
const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0;
  return Math.ceil(words / wordsPerMinute);
};

const generateKeywords = (title, category) => {
  const keywords = new Set();
  keywords.add(category.toLowerCase());
  title.toLowerCase().split(' ').forEach(word => {
    if (word.length > 3) keywords.add(word);
  });
  return Array.from(keywords);
};

// Function to fetch all blogs
export const fetchBlogs = async () => {
  const db = getDatabase(app);
  const dbRef = ref(db, "blogs"); // Reference to the "blogs" node

  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const blogs = snapshot.val();
      return Object.entries(blogs).map(([id, blog]) => ({
        id,
        ...blog,
      })); // Convert the blog data into an array with an id field
    } else {
      console.error("No blogs found in the database.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

// Function to delete a blog by ID
export const deleteBlog = async (id) => {
  const db = getDatabase(app);
  const blogRef = ref(db, "blogs/" + id); // Reference to the specific blog node

  try {
    await remove(blogRef); // Remove the blog from the database
    console.log("Blog successfully deleted");
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
};

// Function to fetch a single blog by ID
export const fetchBlogById = async (id) => {
  const db = getDatabase(app);
  const dbRef = ref(db, 'blogs/' + id);

  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return { id, ...snapshot.val() }; // Add the blog ID to the data
    } else {
      console.error('Blog not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    return null;
  }
};

// Function to update a blog by ID
export const updateBlog = async (id, blogData) => {
  const db = getDatabase(app);
  const blogRef = ref(db, 'blogs/' + id);

  try {
    await update(blogRef, blogData); // Update the existing blog
    console.log('Blog successfully updated');
  } catch (error) {
    console.error('Error updating blog:', error);
  }
};