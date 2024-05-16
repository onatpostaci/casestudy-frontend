import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

interface PitchFormProps {
  value: string;
  setValue: (newValue: string) => void;
  sendCityName: (cityName: string) => void;
}

const PitchForm = ({ value, setValue, sendCityName }: PitchFormProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label
        htmlFor="city"
        className="flex items-center gap-2 text-md font-medium text-gray-700"
      >
        Get Your City Pitch
        <SiOpenai />
      </label>
      <div className="flex items-center space-x-2">
        <input
          id="city"
          type="text"
          className="w-[25%] border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter a city name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button
          type="button"
          className="flex flex-row items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => sendCityName(value)}
        >
          Get Pitch
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PitchForm;
