"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent bg-opacity-80 p-13 text-white z-999">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/sharpcomm-logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 120px, 150px"
            className="w-[160px] sm:w-[160px] md:w-[180px] lg:w-[200px] cursor-pointer h-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-sm sm:text-base md:text-base lg:text-lg">
          <Link href="/" className="hover:text-blue-400">
            FILMS
          </Link>
          <Link href="/" className="hover:text-blue-400">
            VFX/ANIMATION
          </Link>
          <Link href="/" className="hover:text-blue-400">
            PHOTOGRAPHY
          </Link>
          <Link href="/" className="hover:text-blue-400">
            CLIENTS
          </Link>
          <Link href="/" className="hover:text-blue-400">
            CONTACT
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-black bg-opacity-90 text-white px-6 py-4 space-y-4 text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            FILMS
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            VFX/ANIMATION
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            PHOTOGRAPHY
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            CLIENTS
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
