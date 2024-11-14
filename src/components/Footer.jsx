import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-0">
            <Link to="/" className="hover:text-gray-400 transition-colors">
              About
            </Link>
            <Link to="/" className="hover:text-gray-400 transition-colors">
              Contact
            </Link>
            <Link to="/" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BookStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
