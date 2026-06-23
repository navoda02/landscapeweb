"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Residential", path: "/residential" },
    { name: "Commercial", path: "/commercial" },
    { name: "Nature Play", path: "/nature-play" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo with Image - Links to Home */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              {/* Uncomment when logo image is available */}
              {/* <Image
                src="/images/logo.png"
                alt="ScapeXNT Logo"
                fill
                className="object-contain"
              /> */}
            </div>
            <div className="ml-2 flex items-baseline">
              <span className="text-xl md:text-2xl font-bold text-green-800 transition-colors duration-300 group-hover:text-green-600">
                ScapeX NT
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Horizontal */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`group relative font-medium transition-colors duration-300 py-2 ${
                  isActive(item.path)
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                {item.name}
                {/* Underline animation on hover */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-green-700 transition-all duration-300 ${
                  isActive(item.path)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-green-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-green-700 bg-green-50"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}