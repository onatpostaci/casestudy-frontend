import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col text-black-100 mt-5 border-t bg-[#E9ECF8] border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-row justify-start items-center gap-6">
          <Image
            src="/xaver-logo.png"
            alt="xaver logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Xaver 2024 Full Stack Intern Case Study
          </p>
          <p className="text-base text-gray-700">All rights reserved &copy;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
