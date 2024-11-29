import React, { useState } from 'react';
import ProductFeatures from './productFeature';
import Image from 'next/image';
import placeholder from '../../public/assets/Images/Gallery1.jpg';

// Component 1: Product Name, Description, and 3D Model
const ProductOverview = ({ product }) => (
  <div className="bg-white p-6 border-b border-gray-300 mt-20">
    <div className="max-w-7xl mx-auto text-center">
      {/* Breadcrumb */}
      <div className="text-gray-500 mb-4 text-left">
        Home {'>'} {product?.category || 'Category'} {'>'} {product?.name || 'Product Name'}
      </div>

      {/* Product Title and Description */}
      <h1 className="text-3xl md:text-5xl font-bold text-black">
        {product?.name || 'Product Name'}
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        {product?.description || 'Product description goes here.'}
      </p>

      {/* 3D Model Mockup */}
      <div className="mt-8 text-center">
        <p className="text-sm">3D Mockup of product</p>
        {/* Placeholder for the 3D model */}
      </div>
    </div>
  </div>
);

// Component 2: Features List and Product Image

// Component 3: Product Appearance (Technical Drawing)
const ProductAppearance = () => (
  <div className="bg-white p-6 border-b border-gray-300">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">Appearance</h2>
      <Image
        src={placeholder}
        alt="Product Appearance"
        className="w-full object-cover"
      />
    </div>
  </div>
);

// Component 4: Specifications Table
const ProductSpecifications = ({ specifications }) => (
  <div className="bg-white p-6 border-b border-gray-300">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">Specifications</h2>
      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="p-2">Model No</th>
              <th className="p-2">Capacity</th>
              <th className="p-2">Heater</th>
              <th className="p-2">Dimensions</th>
              <th className="p-2">Inlet Size</th>
              <th className="p-2">Outlet Size</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-black">
              <td className="p-2">{specifications?.modelNumber || '-'}</td>
              <td className="p-2">{specifications?.capacity || '-'}</td>
              <td className="p-2">{specifications?.heater || '-'}</td>
              <td className="p-2">{specifications?.dimensions || '-'}</td>
              <td className="p-2">{specifications?.inletSize || '-'}</td>
              <td className="p-2">{specifications?.outletSize || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Component 5: Weight Table
const ProductWeight = ({ weight }) => (
  <div className="bg-white p-6 border-b border-gray-300">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">Weight (KG)</h2>
      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="p-2">Model No</th>
              <th className="p-2">Empty</th>
              <th className="p-2">Operation</th>
              <th className="p-2">Full</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-black">
              <td className="p-2">{weight?.modelNumber || '-'}</td>
              <td className="p-2">{weight?.empty || '-'}</td>
              <td className="p-2">{weight?.operation || '-'}</td>
              <td className="p-2">{weight?.full || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ContactForm = ({ onClose }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    onClose();
  };

  return (
    <>
      {!showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>

          <div className="relative bg-[#0B1C3D] text-white p-8 rounded-lg w-full max-w-xl z-50">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 text-black rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 text-black rounded"
                />
              </div>
              <div className="mb-4 flex space-x-4">
                <input
                  type="text"
                  placeholder="Company"
                  className="w-1/2 p-2 text-black rounded"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-1/2 p-2 text-black rounded"
                />
              </div>
              <div className="mb-4 flex space-x-4">
                <input
                  type="text"
                  placeholder="Country Code"
                  className="w-1/2 p-2 text-black rounded"
                />
                <input
                  type="text"
                  placeholder="Phone no."
                  className="w-1/2 p-2 text-black rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 h-20 text-black rounded"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="relative bg-[#0B1C3D] text-white p-8 rounded-lg w-full max-w-md z-50 text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="mb-4">
              Thank you for reaching out to us. Your message has been submitted.
            </p>
            <Image
              src="path-to-email-icon"
              alt="Email Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <button
              onClick={handleCloseSuccessModal}
              className="bg-white text-black px-6 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const ProductPage = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <ProductOverview product={product} />
      <ProductFeatures product={product} />
      <ProductSpecifications specifications={product?.specifications} />
      <ProductWeight weight={product?.weight} />

      <a
        href="#"
        onClick={openModal}
        className="fixed bottom-4 right-4 bg-[#07509F] text-white py-2 px-5 rounded shadow-lg z-50 hover:bg-[#064b8c] text-sm"
      >
        Contact Us
      </a>

      {isModalOpen && <ContactForm onClose={closeModal} />}
    </div>
  );
};

export default ProductPage;
