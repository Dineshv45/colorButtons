import React, { useState } from "react";

function ButtonLayout() {
  const colors = [
    "#FF6B6B", 
    "#FF922B",
    "#FFD93D", 
    "#2ECC71", 
    "#1E90FF", 
    "#9B5DE5", 
    "#F72585", 
    "#B5651D", 
    "#00FFFF"
  ];

  const [buttonColors, setButtonColors] = useState(Array(9).fill(null));
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = (index) => {
    if (colorIndex >= colors.length) return;

    const updatedColors = [...buttonColors];
    updatedColors[index] = colors[colorIndex];

    setButtonColors(updatedColors);
    setColorIndex(colorIndex + 1);
  };

  // ✅ Reset Function
  const handleReset = () => {
    setButtonColors(Array(9).fill(null));
    setColorIndex(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">


      {/* ✅ Button Grid */}
      <div className="grid grid-cols-3 gap-4">
        {buttonColors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={color !== null}
            style={{ backgroundColor: color || "" }}
            className={`w-24 h-16 rounded-xl text-stone-50 font-semibold transition-all duration-200
              ${color ? "cursor-not-allowed opacity-80" : "bg-gray-400 hover:bg-gray-600 hover:scale-105"}
            `}
          >
            {color ? "Used" : "Click Me"}
          </button>
        ))}
      </div>

      {/* ✅ Reset Button */}
      <button
        onClick={handleReset}
        className="mt-10 px-6 py-2 bg-green-700 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
      >
        Reset
      </button>
    </div>
  );
}

export default ButtonLayout;
