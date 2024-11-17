import React from 'react';
import Image from 'next/image';

// Sample product data
const products = [
  {
    id: 1,
    category: 'Weighing',
    name: 'iPhone Xs',
    description:
      'iPhone Xs recently in the market has been eye-catching for many previous Apple users',
    imageUrl: '/assets/Images/Gallery1.jpg',
  },
  {
    id: 2,
    category: 'Weighing',
    name: 'iPhone Xs',
    description:
      'iPhone Xs recently in the market has been eye-catching for many previous Apple users',
    imageUrl: '/assets/Images/Gallery1.jpg',
  },
  {
    id: 3,
    category: 'Weighing',
    name: 'iPhone Xs',
    description:
      'iPhone Xs recently in the market has been eye-catching for many previous Apple users',
    imageUrl: '/assets/Images/Gallery1.jpg',
  },
  {
    id: 4,
    category: 'Weighing',
    name: 'iPhone Xs',
    description:
      'iPhone Xs recently in the market has been eye-catching for many previous Apple users',
    imageUrl: '/assets/Images/Gallery1.jpg',
  },
  {
    id: 5,
    category: 'Weighing',
    name: 'iPhone Xs',
    description:
      'iPhone Xs recently in the market has been eye-catching for many previous Apple users',
    imageUrl: '/assets/Images/Gallery1.jpg',
  },
  {
    id: 6,
    category: 'Weighing',
    name: 'iPhone Xs',
    description:
      'iPhone Xs recently in the market has been eye-catching for many previous Apple users',
    imageUrl: '/assets/Images/Gallery1.jpg',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-md overflow-hidden relative flex flex-col">
      {/* Image */}
      <Image
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-full object-cover"
        width={10}
        height={10}
      />

      {/* Product Details */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        {/* Category Tag */}
        <div className="bg-gray-800 text-white text-xs px-2 py-1 mb-2 rounded-full w-1/4 text-center">
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className="text-lg text-black font-semibold">{product.name}</h3>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      </div>

      {/* Button positioned below the text */}
      <div className="p-4 mt-auto flex justify-end">
        <a
          href={`/product/detail`}
          className="bg-[#07509F] text-white px-4 py-2 rounded hover:bg-blue-700 w-1/3 text-center"
        >
          Details
        </a>
      </div>
    </div>
  );
};

const ProductListing = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white">
      {/* Breadcrumb for navigation */}
      <div className="mb-4 text-sm text-gray-500">Home {'>'} Gas</div>

      {/* Product Grid */}
      <div className="px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
