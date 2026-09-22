// src/pages/ProdPage.jsx

import React from 'react'
import { useParams } from 'react-router-dom'
import { fashLink } from '../pages/Home.jsx'
import SizeSelector from './SizeSelector.jsx';

// 1. Move helper function OUTSIDE the component
const calculateOriginalPrice = (priceString, discountPercent) => {
  if (!priceString || !discountPercent) return null;

  // Clean the price string (removes currency symbols, spaces, commas)
  const numericString = String(priceString).replace(/[^0-9.]/g, '');
  const currentPrice = Number(numericString);

  if (!currentPrice || isNaN(currentPrice)) return null;

  // Calculate original price
  const original = currentPrice / (1 - Number(discountPercent) / 100);

  return `₹${Math.round(original)}`;
};

const ProdPage = () => {
  const { prodLink } = useParams();
  const product = fashLink.find((item) => item.prodLink === prodLink);

  // Early return if product isn't found
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <h2 className="text-2xl font-semibold text-gray-600">Product Not Found</h2>
      </div>
    );
  }

  // 2. Perform calculations after validating product exists
  const discountPercent = product.discount;
  const originalPrice = calculateOriginalPrice(product.price, discountPercent);

  console.log({
    rawPrice: product.price,
    discount: product.discount,
    calculatedOriginal: originalPrice
  });

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="flex gap-12 ">
        
        {/* Product Image */}
        <div className="bg-white w-full md:w-1/2 flex justify-center p-6 rounded-xl border border-black/5">
          <img 
            src={product.fashImg} 
            alt={product.prodName}
            className="h-112 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="">
          <h1 className="font-medium text-4xl text-gray-800">{product.prodName}</h1>
          
          <hr className="my-5 border-gray-400" />

           {/* 3. Discount Badge */}
            {discountPercent && (
              <span className="bg-red-100 text-red-700 text-xl font-semibold rounded-md">
                {discountPercent}% OFF
              </span>
            )}

          {/* Pricing */}
            <div className="flex items-center gap-4 mt-2">
            
                {/* 1. Actual Product Price */}
                <span className="text-3xl font-bold">
                {product.price}
                </span>

                {/* 2. Struck-Through Original Price */}
                {originalPrice && (
                <span className="text-gray-500 line-through text-xl">
                    {originalPrice}
                </span>
                )}
            </div>

          <div className='my-5'>
            <SizeSelector/>
          </div>
          <div className="flex gap-4">
            <button className='bg-green-600 text-white px-5 py-3 hover:bg-green-500 hover:text-white hover:scale-110 duration-300 cursor-pointer hover:px-10 hover:rounded'>Buy Now</button>
            <button className='px-5 py-3 border border-[#800020] hover:bg-[#800020] hover:text-white hover:scale-110 duration-300 cursor-pointer hover:px-10'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdPage;