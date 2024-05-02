"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../../../public/sherpalogowhite.png";
import logo from "../../../public/sherpalogo.png";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillPhone,
} from "react-icons/ai";
import { useEffect, useState } from "react";

export default function NavBar() {
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
  return (
    <>
      <div
        className={`${
          isMobileMenuOpen ? "hidden" : "block"
        } transition-all duration-300 ease-in-out bg-white shadow-lg`}
      >
        <div className="top-header p-3 flex justify-between shadow-md container mx-auto w-3/4">
          <div>
            <h2 className="text-gray-700 uppercase">
              Tourism License No.: 4084/079
            </h2>
          </div>
          <div className="flex items-center justify-evenly w-96 underline">
            <Link href="/customize-trip">Customize trip</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/reviews">Read Reviews</Link>
            <div className="hidden sm:block h-full relative min-h-[1em] w-0.5 self-stretch bg-neutral-500 opacity-100"></div>
            <AiFillYoutube className="text-2xl" />
            <AiFillFacebook className="text-2xl" />
            <AiFillLinkedin className="text-2xl" />
            <AiFillTwitterSquare className="text-2xl" />
            <AiFillInstagram className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="logo-contact container mx-auto w-3/4 p-7 flex justify-between">
        <Image src={logo} alt="Logo" width={200} height={150} />
        <div className="flex">
          <AiFillPhone className="text-3xl text-secondaryColor" />
          <div className="flex flex-col">
            <h2 className="text-primaryColor text-xl">
              +977-9840341825 / +977-9801849111
            </h2>
            <h3 className="upper text-gray-500 text-lg">
              Available on: Whatsapp & Viber
            </h3>
          </div>
        </div>
      </div>
      <nav
        className={`${
          isMobileMenuOpen || isScrolled ? "fixed top-0 left-0 right-0" : ""
        }  z-50 p-4 transition-all duration-300 ease-in-out bg-primaryColor`}
      >
        <div className="flex justify-between items-center w-3/4 container mx-auto">
          <Link href="/">
            <Image src={whiteLogo} alt="Your Logo" width={100} height={50} />
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
                  isScrolled || isMobileMenuOpen
                    ? "text-blue-600"
                    : "text-white"
                } text-white hover:text-blue-800 `}
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/about-us"
                className={`${
                  isScrolled || isMobileMenuOpen
                    ? "text-blue-600"
                    : "text-white"
                } hover:text-blue-800 text-white`}
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
                  isScrolled || isMobileMenuOpen
                    ? "text-blue-600"
                    : "text-white"
                } hover:text-blue-800 text-white`}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${
                  isScrolled || isMobileMenuOpen
                    ? "text-blue-600"
                    : "text-white"
                } hover:text-blue-800 text-white`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`${
                  isScrolled || isMobileMenuOpen
                    ? "text-blue-600"
                    : "text-white"
                } hover:text-blue-800 text-white`}
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
    </>
  );
}
