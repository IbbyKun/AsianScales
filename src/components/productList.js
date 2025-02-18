import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-md overflow-hidden relative flex flex-col">
      {/* Image or No Preview placeholder */}
      <div className="relative w-full aspect-[3/2]">
        {product.images?.[0] ? (
          <div className="w-full h-full bg-white">
            <Image
              src={product.images[0]}
              alt={product.name}
              className="object-contain w-full h-full"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600 text-lg">No Preview Available</p>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        {/* Category/Subcategory Tag */}
        <div className="bg-gray-800 text-white text-xs px-2 py-1 mb-2 rounded-full w-1/4 text-center">
          {product.category.toLowerCase() === 'weighing' 
            ? product.subcategory 
            : product.category}
        </div>

        {/* Product Name */}
        <h3 className="text-lg text-black font-semibold">{product.name}</h3>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mt-2">
          {product.description
            ? product.description.split(' ').slice(0, 15).join(' ') +
              (product.description.split(' ').length > 15 ? '...' : '')
            : 'No description available'}
        </p>
      </div>

      {/* Button positioned below the text */}
      <div className="p-4 mt-auto flex justify-end">
        <a
          href={`/${product.name.toLowerCase().replace(/\s+/g, '_')}`}
          className="bg-[#07509F] text-white px-4 py-2 rounded hover:bg-blue-700 w-1/3 text-center"
        >
          Details
        </a>
      </div>
    </div>
  );
};

const ProductListing = ({ products = [] }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const category = products[0]?.category || 'Products';

  // Filter products based on subcategory
  const filteredProducts = selectedSubcategory === 'All' 
    ? products 
    : products.filter(product => product.subcategory === selectedSubcategory);

  // Only show dropdown for weighing category
  const showSubcategoryFilter = category.toLowerCase() === 'weighing';

  return (
    <div className="w-full mx-auto p-6 bg-white">
      {/* Breadcrumb for navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-sm text-gray-500 md:w-1/6">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>{' '}
          {'>'} {category}
        </div>

        {/* Subcategory tabs for weighing products */}
        {showSubcategoryFilter && (
          <div className='w-full'>
            <div className="flex space-x-0">
              {['All', 'Indicators', 'Load Cell Sensors', 'Platform Scales'].map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 
                    ${selectedSubcategory === subcategory
                    ? 'bg-[#07509F] text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {subcategory === 'All' ? 'All Products' : subcategory}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No products message */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No products found in this category.
        </div>
      )}
    </div>
  );
};

export default ProductListing;
