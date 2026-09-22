import React, { useState } from 'react'

const SizeSelector = () => {
  // Available Sizes Array
  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  // State to track selected size (defaults to 'M')
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <label className="font-semibold text-gray-700 text-sm tracking-wide">
          SELECT SIZE: <span className="text-black font-bold">{selectedSize}</span>
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <label key={size} className="cursor-pointer">
            {/* Hidden Native Radio Input */}
            <input
              type="radio"
              name="product-size"
              value={size}
              checked={selectedSize === size}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="sr-only peer"
            />
            
            {/* Custom Styled Box */}
            <div className="w-12 h-12 flex items-center justify-center text-sm font-medium border border-gray-300 rounded-md transition-all peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black">
              {size}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;