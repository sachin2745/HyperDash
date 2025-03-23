import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      <header className="text-white  bg-primary font-Poppins">
        <div className="container mx-auto flex items-center justify-between p-6 max-w-[87rem]">
          <nav className="hidden md:flex gap-6 lg:gap-16 text-[17px] leading-8">
            <a href="#AirX">Air X</a>
            <a href="#LexoZ">Lexo Z</a>
            <a href="#Gravity9">Gravity 9</a>
          </nav>

          <a className="flex items-center">
            <img src="/Logo.png" alt="HyperDash_Logo" loading="lazy" className="h-9" />
          </a>

          <div className="hidden md:flex gap-6 lg:gap-16 items-center">
            <a href="#Shop">Shop</a>
            <a href="#Account">Account</a>
            <span href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 128 128">
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="7"
                d="M21 65H107M21 96H107M21 33L107 33"
              ></path>
            </svg>
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 128 128">
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="7"
                d="M21 65H107M21 96H107M21 33L107 33"
              ></path>
            </svg>
          </button>
        </div>

        <div className={`flex flex-col items-center gap-4 bg-[#222222] py-4 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
          <a href="#" className="text-white text-[17px]">Air X</a>
          <a href="#" className="text-white text-[17px]">Lexo Z</a>
          <a href="#" className="text-white text-[17px]">Gravity 9</a>
          <a href="#" className="text-white text-[17px]">Shop</a>
          <a href="#" className="text-white text-[17px]">Account</a>
        </div>
      </header>
    </section>
  );
};

export default Header;
