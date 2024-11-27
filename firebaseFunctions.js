import { getDatabase, ref, get, child } from 'firebase/database';
import { app } from './firebase'; // Make sure Firebase is initialized

export const fetchProducts = async () => {
  const db = getDatabase(app);
  const dbRef = ref(db);

  try {
    const snapshot = await get(child(dbRef, 'products'));
    if (snapshot.exists()) {
      const products = snapshot.val();
      // Convert the products object to an array for easier usage
      return Object.values(products);
    } else {
      console.error('No products found in the database.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
