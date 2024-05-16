import React from "react";
import Image from "next/image";

interface TechCardProps {
  tech: string;
  imageSource: string;
}

const TechCard = ({ tech, imageSource }: TechCardProps) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white w-64">
      <div className="relative w-full h-24 flex justify-center items-center">
        <div className="relative w-[80%] h-full">
          <Image
            src={imageSource}
            alt={`${tech} logo`}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TechCard;
