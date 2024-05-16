import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100;">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
