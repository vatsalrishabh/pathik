"use client";
import React, { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import logo from "../../../public/assets/styledivaalogo.png";
import Image from "next/image";

const AnNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ebd7a7] shadow-md p-4 w-full fixed top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
          <Image src={logo} alt="Logo" width={150} height={150} />
      

        {/* Menu Button */}
        <button onClick={toggleMenu} className="text-[#970403] focus:outline-none">
          {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </div>

      {/* Menu Items */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 text-lg font-semibold">
          {["Home", "About Us", "Stories", "Debates", "Gallery", "Contact Us"].map((tab) => (
            <p
              key={tab}
              className="cursor-pointer p-2 rounded-lg text-[#970403] hover:bg-[#f4a800] hover:text-white transition-all duration-300"
            >
              {tab}
            </p>
          ))}

          {/* Login Button */}
          <button className="mt-2 bg-[#fe6601] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#970403] transition-all">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default AnNavbar;
