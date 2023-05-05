import React, { useState } from 'react';

function PixelToRemConverter() {
  const [pixelValue, setPixelValue] = useState('');
  const [remValue, setRemValue] = useState('');

  const handlePixelChange = (e) => {
    const value = e.target.value;
    setPixelValue(value);
    setRemValue(`${value / 16}rem`); // assuming 1rem = 16px
  };

  return (
    <div>
      <label htmlFor="pixel-input">Pixel Value:</label>
      <input id="pixel-input" type="number" value={pixelValue} onChange={handlePixelChange} />

      <label htmlFor="rem-input">Rem Value:</label>
      <input id="rem-input" type="text" value={remValue} readOnly />
    </div>
  );
}
