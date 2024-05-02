"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logo = isScrolled ? "/sherpalogo.png" : "/sherpalogowhite.png";
  return (
    <nav
      className={`${
        isMobileMenuOpen || isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-10 p-4 transition-all duration-300 ease-in-out `}
    >
      <div className="flex justify-between items-center w-3/4 container mx-auto">
        <Link href="/">
          <Image src={logo} alt="Your Logo" width={100} height={50} />
        </Link>
        <div className="lg:hidden">
          <button className="text-blue-600 p-3" onClick={toggleMobileMenu}>
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Mobile menu</title>
              <path d="M0 0h20v1H0V0zm0 6h20v1H0V6zm0 6h20v1H0v-1z" />
            </svg>
          </button>
        </div>
        <ul
          className={`lg:flex ${
            isMobileMenuOpen ? "block" : "hidden"
          } space-x-6`}
        >
          <li>
            <Link
              href="/"
              className={`${
                isScrolled || isMobileMenuOpen ? "text-blue-600" : "text-white"
              } hover:text-blue-800`}
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/about-us"
              className={`${
                isScrolled || isMobileMenuOpen ? "text-blue-600" : "text-white"
              } hover:text-blue-800`}
            >
              About Us
            </Link>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-black shadow-lg">
              <li>
                <Link href="/about/team" className="block px-4 py-2">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/history" className="block px-4 py-2">
                  Our History
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/packages"
              className={`${
                isScrolled || isMobileMenuOpen ? "text-blue-600" : "text-white"
              } hover:text-blue-800`}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${
                isScrolled || isMobileMenuOpen ? "text-blue-600" : "text-white"
              } hover:text-blue-800`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={`${
                isScrolled || isMobileMenuOpen ? "text-blue-600" : "text-white"
              } hover:text-blue-800`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div>
          <Link
            href="/sign-in"
            className="hidden lg:inline-block ml-3 py-2 px-6 bg-gray-300 text-gray-900 font-bold rounded-xl transition duration-200 hover:bg-gray-400"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="hidden lg:inline-block ml-3 py-2 px-6 bg-blue-700 text-white font-bold rounded-xl transition duration-200 hover:bg-blue-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
