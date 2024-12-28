import React, { useState, useEffect } from 'react';
import ProductFeatures from './productFeature';
import Image from 'next/image';
import placeholder from '../../public/assets/Images/Gallery1.jpg';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MODEL_MAPPINGS = {
  'automatic_lpg_cylinder_filling_machine_(complete)': '/models/machine1.glb',
  'automatic_lpg_cylinder_filling_machine_(double_nozzle)_(complete)': '/models/machine2.glb',
  'automatic_lpg_dispensing_unit_(complete)': '/models/machine3.glb'
};

// Dynamically import the 3D components to avoid SSR issues
const Model = dynamic(() => 
  import('./Model').then((mod) => mod.default), 
  { ssr: false }
);

// Component 1: Product Name, Description, and 3D Model
const ProductOverview = ({ product }) => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Get the path safely on client-side
    setCurrentPath(window.location.pathname.substring(1));
  }, []);

  const modelPath = MODEL_MAPPINGS[currentPath];

  return (
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

        {/* 3D Model Section */}
        <div className="mt-8 text-center">
          {modelPath ? (
            <div style={{ height: '400px' }}>
              <Suspense fallback={<div>Loading 3D model...</div>}>
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <Model modelPath={modelPath} />
                  <OrbitControls />
                </Canvas>
              </Suspense>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No 3D model available for this product</p>
          )}
        </div>
      </div>
    </div>
  );
};

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    countryCode: '',
    phoneNo: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowSuccessModal(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          countryCode: '',
          phoneNo: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    onClose(); // Close the entire modal
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 text-black rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 text-black rounded"
                  required
                />
              </div>
              <div className="mb-4 flex space-x-4">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-1/2 p-2 text-black rounded"
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-1/2 p-2 text-black rounded"
                />
              </div>
              <div className="mb-4 flex space-x-4">
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  placeholder="Country Code"
                  className="w-1/2 p-2 text-black rounded"
                />
                <input
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder="Phone no."
                  className="w-1/2 p-2 text-black rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-2 h-20 text-black rounded"
                  required
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
            <div className="text-5xl mb-4">✅</div>
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
