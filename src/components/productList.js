import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-md overflow-hidden relative flex flex-col">
      {/* Image or No Preview placeholder */}
      <div className="relative w-full aspect-[3/2]">
        {product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            className="object-cover"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600 text-lg">No Preview Available</p>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        {/* Category Tag */}
        <div className="bg-gray-800 text-white text-xs px-2 py-1 mb-2 rounded-full w-1/4 text-center">
          {product.category}
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
  // Get the category from the first product in the array
  const category = products[0]?.category || 'Products';

  return (
    <div className="w-full mx-auto p-6 bg-white">
      {/* Breadcrumb for navigation */}
      <div className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>{' '}
        {'>'} {category}
      </div>

      {/* Product Grid */}
      <div className="md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
