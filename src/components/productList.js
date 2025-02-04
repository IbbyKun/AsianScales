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
        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>{' '}
          {'>'} {category}
        </div>

        {/* Subcategory dropdown for weighing products */}
        {showSubcategoryFilter && (
          <div className="relative mx-auto md:right-20">
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="block appearance-none w-48 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="All">All Products</option>
              <option value="Indicators">Indicators</option>
              <option value="Load Cell Sensors">Load Cell Sensors</option>
              <option value="Platform Scales">Platform Scales</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
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
