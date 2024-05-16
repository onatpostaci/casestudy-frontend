import React from "react";

interface CityBoxProps {
  cityName: string;
  cityPitch: string;
  isLoading: boolean;
  createdAt: string | null;
}

const CityBox = ({
  cityName,
  cityPitch,
  isLoading,
  createdAt,
}: CityBoxProps) => {
  return (
    <div className="relative border rounded-lg p-4 flex flex-col justify-between gap-6">
      <h2 className="text-xl font-semibold">{cityName}</h2>
      {isLoading ? (
        <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin border-black"></div>
      ) : (
        <p>{cityPitch}</p>
      )}
      <div className="absolute right-2 text-xs text-gray-600">{createdAt}</div>
    </div>
  );
};

export default CityBox;
