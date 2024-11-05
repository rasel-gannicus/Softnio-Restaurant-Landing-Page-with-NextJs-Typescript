"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-[rgba(189,31,23,0.43)] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-[1320px] mx-auto py-4 px-6">
        <div className="navbar-brand flex justify-center items-center gap-10">
          <Image src={logo} alt="Restaurant Logo" className="" />
          <ul className="navbar-nav flex space-x-6 text-sm">
            <li
              className={`nav-item ${
                router.pathname === "/"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/about"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <a href="/about">About</a>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/about"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <a href="/about">Portfolio</a>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/about"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <a href="/about">Clients</a>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/about"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <a href="/about">Blog</a>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/about"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <a href="/about">Contact</a>
            </li>
          </ul>
        </div>
        {/* --- Navbar Right --- */}
        <div className="">
            <button className="btn-primary">Book a table</button>
        </div>
        <button className="navbar-toggler block md:hidden">
          <span className="navbar-toggler-icon block w-6 h-1 bg-white my-1"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
