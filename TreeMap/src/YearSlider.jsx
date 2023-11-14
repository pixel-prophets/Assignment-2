import { useState } from "react";

const YearSlider = ({ year, setYear }) => {

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-5">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year-slider">
        Select Year: {year}
      </label>
      <input
        className="slider-color"
        id="year-slider"
        type="range"
        min="2005"
        max="2022"
        value={year}
        onChange={handleChange}
      />
    </div>
  );
}

export default YearSlider