import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

import React from 'react';

const HeroSection: React.FC = () => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: 'society-registration',
      name: 'Society Registration',
      price: 5999
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold ">SOCIETY REGISTRATION</h2>
            <div className="border-t border-white/50 my-4"></div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Online Process</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p>ID Proof</p>
            <p>Address Proof</p>
            <p>Photographs</p>
            <button className="text-white font-semibold mt-2 hover:underline">
              Load More
            </button>
          </div>
        </div>

        <div className="md:col-span-8">
          <h1 className="text-2xl font-bold text-gray-800">Society Registration</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.585l-5.196 2.732 0.992-5.784-4.204-4.097 5.809-0.844 2.599-5.263 2.599 5.263 5.809 0.844-4.204 4.097 0.992 5.784z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2 text-sm font-medium">(1842)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border-2 border-dashed border-yellow-400 rounded-lg p-4 relative pt-6">
              <span className="absolute top-0 -translate-y-1/2 left-4 bg-white px-2 text-xs font-semibold text-yellow-500">
                Basic Package
              </span>
              <h4 className="font-bold text-gray-800 mb-2">Society Registration</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Document Preparation
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Registration Process
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Government Fees
                </li>
              </ul>
              <div className="mt-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  ADD TO CART - ₹5,999
                </Button>
              </div>
            </div>

            <div className="border-2 border-dashed border-yellow-400 rounded-lg p-4 relative pt-6">
              <span className="absolute top-0 -translate-y-1/2 left-4 bg-white px-2 text-xs font-semibold text-yellow-500">
                Premium Package
              </span>
              <h4 className="font-bold text-gray-800 mb-2">Society Registration + Tax Registration</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Society Registration
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  12A Registration
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  80G Registration
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  PAN Application
                </li>
              </ul>
              <div className="mt-4">
                <Button
                  onClick={() => addToCart({
                    id: 'society-registration-premium',
                    name: 'Society Registration Premium',
                    price: 9999
                  })}
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  ADD TO CART - ₹9,999
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;