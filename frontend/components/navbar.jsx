"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    // Check for authentication token in local storage
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
          <img
            src="/images/industrial1.png"
            alt="Industrial Logo 1"
            className="h-8 w-auto"
          />
       
            </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
        <div className="relative">
          {isAuthenticated ? (
            <Link href="/logout" className="hover:text-gray-300">
              Logout
            </Link>
          ) : (
            <div>
              <button
                onClick={toggleDropdown}
                className="hover:text-gray-300 focus:outline-none"
              >
                Account
              </button>
              {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
