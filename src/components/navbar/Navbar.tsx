"use client";
import React from "react";
import Image from "next/image";
import NavbarItem from "../navbar-item/NavbarItem";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="w-full relative top-0 z-50 bg-[#E9ECF8] shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-6 lg:px-4 py-2">
        <div className="flex items-center">
          <Image
            src="/xaver-logo.png"
            alt="Xaver logo"
            width={120}
            height={30}
            className="object-contain"
          />
        </div>
        <div className="hidden md:flex space-x-8">
          <NavbarItem
            href="/"
            label="Playground"
            onClick={() => scrollTo("playgroundId")}
          />
          <NavbarItem
            href="/"
            label="How System Works?"
            onClick={() => scrollTo("hwsysworks")}
          />
          <NavbarItem
            href="/"
            label="Tech Stack"
            onClick={() => scrollTo("techstack")}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
