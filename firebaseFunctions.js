import {
  getDatabase,
  ref,
  get,
  child,
  update,
  remove,
  push,
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
  const db = getDatabase(app); // Get database reference
  const blogId = new Date().getTime(); // Use current timestamp as unique ID for blog post
  const blogRef = ref(db, "blogs/" + blogId); // Reference to the "blogs" node in Firebase

  try {
    await set(blogRef, blogData); // Save the blog data to Firebase
    console.log("Blog successfully added");
  } catch (error) {
    console.error("Error adding blog:", error);
  }
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