import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const categories = ["Runners", "Sneakers", "Basketball", "Outdoor", "Golf", "Hiking"];
  const company = ["About", "Contact", "Blogs"];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Subscription Section */}
      <div className="bg-blue-600 px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            JOIN OUR KICKSPLUS CLUB & GET 15% OFF
          </h2>
          <p className="text-sm md:text-base">Sign up for free! Join the community.</p>
        </div>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            SUBMIT
          </button>
        </form>
        <div className="text-4xl font-bold">KICKS</div>
      </div>

      {/* Info Section */}
      <div className="px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 bg-gray-800">
        {/* About */}
        <div>
          <h3 className="font-bold text-orange-500 mb-2">About us</h3>
          <p className="text-gray-300 text-sm">
            We are the biggest hyperstore in the universe. We got you all cover with our
            exclusive collections and latest drops.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-2">Categories</h3>
          <ul className="text-gray-300 space-y-1">
            {categories.map((cat) => (
              <li key={cat} className="hover:text-white cursor-pointer">
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
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
          <h3 className="font-bold mb-2">Follow us</h3>
          <div className="flex gap-3 text-gray-300 text-xl">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaTiktok className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-900 text-gray-400 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}