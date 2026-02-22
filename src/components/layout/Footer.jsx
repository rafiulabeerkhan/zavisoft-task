import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import kick from "../../assets/Logo/kicksIcon.png";
import footerkick from "../../assets/Logo/Group.png";

export default function Footer() {
  const categories = [
    "Runners",
    "Sneakers",
    "Basketball",
    "Outdoor",
    "Golf",
    "Hiking",
  ];
  const company = ["About", "Contact", "Blogs"];

  return (
    <footer className="bg-white text-white w-full">
      {/* Subscription Section */}
      <div className="bg-blue-600 px-6 py-35 flex flex-col md:flex-row items-center md:justify-between rounded-t-4xl rounded-b-2xl">
        {/* Left Section: Text + Form */}
        <div className="flex flex-col gap-4 md:flex-1 ml-4 sm:ml-10 md:ml-0 text-left">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold">
            JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
          </h1>
          <p className="text-sm sm:text-base">
            Sign up for free! Join the community.
          </p>

          <form className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 justify-start">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 sm:px-6 py-2 w-full sm:w-auto focus:outline-none border border-white rounded-md bg-blue-600 text-white placeholder-gray-200"
            />
            <button
              type="submit"
              className="bg-black px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition text-sm"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Section: Image */}
        <div className="md:mt-0 flex justify-start md:justify-end mr-40">
          <img
            src={kick}
            alt="KICKS"
            className=" sm:w-48 md:w-52 object-contain"
          />
        </div>
      </div>
      {/* Info Section */}
      <div
        className="relative px-6 md:px-16 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 
             bg-[#232321] rounded-t-4xl -mt-24 text-center sm:text-left z-10"
      >
        {" "}
        {/* About */}
        <div>
          <h3 className="font-bold text-[#FFA52F] mb-2">About us</h3>
          <p className="text-gray-300 text-sm">
            We are the biggest hyperstore in the universe. We got you all
            covered with our exclusive collections and latest drops.
          </p>
        </div>
        {/* Categories */}
        <div>
          <h3 className="font-bold text-[#FFA52F] mb-3 ">Categories</h3>
          <ul className="text-gray-300 space-y-1 mb-10">
            {categories.map((cat) => (
              <li key={cat} className="hover:text-white cursor-pointer text-sm">
                {cat}
              </li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="font-bold text-[#FFA52F] mb-2">Company</h3>
          <ul className="text-gray-300 space-y-1">
            {company.map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="font-bold text-[#FFA52F] mb-2">Follow us</h3>
          <div className="flex justify-center sm:justify-start gap-3 text-gray-300 text-xl">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaTiktok className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-[#232321] text-gray-400 text-center py-4 text-sm rounded-b-4xl">
        {/* Footer Image overlapping upwards */}
        <img
          src={footerkick}
          alt="KICKS"
          className="w-full max-w-7xl mx-auto transform "
        />
      </div>
      <div className="bg-white flex justify-center items-center py-4">
        <h5 className="text-black">
          &copy; {new Date().getFullYear()} All rights reserved
        </h5>
      </div>
    </footer>
  );
}
