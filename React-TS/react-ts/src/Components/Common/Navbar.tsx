import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Nav } from "../../types/types";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks: Array<Nav> = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Products", path: "/products" },
    { id: 3, title: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">Masai</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="hidden md:block">
            <Link
              to="/cart"
              className="flex items-center text-gray-900 hover:text-indigo-600"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="ml-2 text-sm font-medium">Cart (0)</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
            <button className="flex items-center text-gray-900 hover:text-indigo-600 px-3 py-2">
              <ShoppingCart className="w-6 h-6" />
              <span className="ml-2">Cart (0)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
