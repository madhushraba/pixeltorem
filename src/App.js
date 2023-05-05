import React, { useState } from "react";
import "./PixelToRemConverter.css";

const PixelToRemConverter = () => {
  // Set the initial pixel value to 16
  const [pixelValue, setPixelValue] = useState(16);

  // Calculate the rem value based on the current pixel value
  const remValue = `${(pixelValue / 16).toFixed(3)}rem`;

  // Update the pixel value when the user types in the input field
  const handlePixelChange = (event) => {
    const value = parseInt(event.target.value, 10);

    if (isNaN(value)) {
      setPixelValue("");
    } else {
      setPixelValue(value);
    }
  };

  // Render the pixel to rem converter
  return (
    <div className="converter">
      <label htmlFor="pixel-input">Pixel value:</label>
      <input
        id="pixel-input"
        type="number"
        min="0"
        value={pixelValue}
        onChange={handlePixelChange}
      />
      <div className="result">{remValue}</div>
    </div>
  );
};

export default PixelToRemConverter;
