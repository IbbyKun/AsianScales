'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fetchProducts } from '../../firebaseFunctions';

const TrendingProducts = ({ subtitle }) => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await fetchProducts();
      // Filter for the two specific products we want to show
      const trendingProducts = allProducts.filter(product => {
        const slugName = product.name.toLowerCase().replace(/\s+/g, '_');
        return slugName === 'automatic_lpg_cylinder_filling_machine_(complete)' ||
               slugName === 'pallet_scale';
      });
      setProducts(trendingProducts);
    };

    loadProducts();
  }, []);

  const handleDetailsClick = (product) => {
    const slugName = product.name.toLowerCase().replace(/\s+/g, '_');
    router.push(`/${slugName}`);
  };

  return (
    <div className="w-full py-12 px-4 bg-white">
      {subtitle && (
        <div>
          <h1 className="text-center text-3xl md:text-6xl font-bold mb-4 text-black">
            Trending Products
          </h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            Check out our Trending Products at this Moment
          </p>
        </div>
      )}

      {products.map((product, index) => (
        <div key={product.slug || index} className="mb-8 md:px-16">
          <div className="relative bg-white rounded-lg shadow-md">
            <Image
              src={product.images[0] || '/assets/images/placeholder.jpg'}
              alt={product.name}
              className="w-full h-72 object-cover rounded-t-lg"
              width={800}
              height={300}
            />
            <div className="grid grid-cols-2 gap-4 bg-customBlue text-white p-6 rounded-b-lg">
              <div className="flex flex-col md:justify-center justify-start mt-9 md:mt-0">
                <h2 className="text-4xl md:text-6xl mt-4 font-bold">
                  {product.name}
                </h2>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm mt-12">{product.description}</p>
                <div className="flex justify-end mt-12 space-x-4">
                  <button 
                    className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md"
                    onClick={() => handleDetailsClick(product)}
                  >
                    Details
                  </button>
                  <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md">
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingProducts;
