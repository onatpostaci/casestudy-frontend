"use client";
import React from "react";
import Link from "next/link";

interface NavbarItemProps {
  href: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavbarItem = ({ href, label, onClick }: NavbarItemProps) => {
  return (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out after:content-[''] after:block after:w-0 hover:after:w-full after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 after:absolute after:inset-x-0 after:-bottom-1"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
