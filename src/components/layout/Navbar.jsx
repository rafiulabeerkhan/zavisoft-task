import { useState } from "react";
import logo from "../../assets/Logo/Logo.svg";
import card from "../../assets/Logo/UserIcon.svg";
import user from "../../assets/Logo/User.svg";
import search from "../../assets/Logo/Search.svg";
import down from "../../assets/Logo/dropDownIcon.svg";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-2 sm:mx-auto px-3 sm:px-5 rounded-2xl bg-[##FAFAFA] overflow-hidden">
        
        <div className="flex items-center justify-between h-15 relative border-b-[##FAFAFA]">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-gray-800 font-Rubik hover:text-black transition"
              >
                New Drops 🔥
              </a>

              {/* Men Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-800 font-Rubik hover:text-black transition">
                  Men
                  <img src={down} alt="Drop-Down Icon" className="h-2 mt-0.5" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    T-Shirts
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Hoodies
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Shoes
                  </a>
                </div>
              </div>

              {/* Women Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-800 font-Rubik hover:text-black transition">
                  Women
                  <img src={down} alt="Drop-Down Icon" className="h-2 mt-0.5" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Dresses
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Tops
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Bags
                  </a>
                </div>
              </div>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden flex items-center text-gray-800"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4 md:gap-6 ml-auto shrink-0">
            {/* Search */}
            <button className="text-gray-700 hover:text-black transition">
              <img src={search} alt="Search" className="h-6 md:h-8" />
            </button>

            {/* User */}
            <button className="text-gray-700 hover:text-black transition">
              <img src={user} alt="User" className="h-6 md:h-8" />
            </button>

            {/* Cart */}
            <button className="text-gray-700 hover:text-black transition">
              <img src={card} alt="Cart" className="h-6 md:h-8" />
            </button>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div
          className={`md:hidden mt-2 flex flex-col gap-2 pb-4 transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <a
            href="#"
            className="text-gray-800 font-Rubik px-4 py-2 hover:bg-gray-100 rounded transition"
          >
            New Drops 🔥
          </a>

          {/* Men Mobile Dropdown */}
          <div className="flex flex-col gap-1">
            <button className="flex items-center justify-between px-4 py-2 text-gray-800 font-Rubik hover:bg-gray-100 rounded transition">
              Men
              <img src={down} alt="Drop-Down Icon" className="h-2 mt-0.5" />
            </button>
            <div className="flex flex-col pl-4 gap-1">
              <a href="#" className="px-4 py-1 hover:bg-gray-100 rounded">
                T-Shirts
              </a>
              <a href="#" className="px-4 py-1 hover:bg-gray-100 rounded">
                Hoodies
              </a>
              <a href="#" className="px-4 py-1 hover:bg-gray-100 rounded">
                Shoes
              </a>
            </div>
          </div>

          {/* Women Mobile Dropdown */}
          <div className="flex flex-col gap-1">
            <button className="flex items-center justify-between px-4 py-2 text-gray-800 font-Rubik hover:bg-gray-100 rounded transition">
              Women
              <img src={down} alt="Drop-Down Icon" className="h-2 mt-0.5" />
            </button>
            <div className="flex flex-col pl-4 gap-1">
              <a href="#" className="px-4 py-1 hover:bg-gray-100 rounded">
                Dresses
              </a>
              <a href="#" className="px-4 py-1 hover:bg-gray-100 rounded">
                Tops
              </a>
              <a href="#" className="px-4 py-1 hover:bg-gray-100 rounded">
                Bags
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
