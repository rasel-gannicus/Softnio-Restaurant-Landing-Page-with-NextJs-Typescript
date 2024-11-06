"use client";
import logo from "@/assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import MobileSidbar from "./Mobile Sidebar/MobileSidbar";
import { menuLink } from "./NavLink";


// --- defining the menu link type
export interface MenuLink {
  path: string;
  label: string;
  icons?: () => JSX.Element;
}


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //--- toggling mobile menu

  // --- marking the sidebar and toggle button as ref so that we will know if the user clicked on them or not.
  const toggleButtonRef: any = useRef(null);
  const sidebarRef: any = useRef(null);

  // --- making navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Check if the click is outside both the sidebar and the toggle button
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Adding event listener to handle clicks outside the navbar
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //--- toggling mobile menu
  const handleToggle = (e: any) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-[rgba(189,31,23,0.43)] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-[1320px] mx-auto py-4 w-[90%] ">
        {/* --- Navbar left --- */}
        <div className="navbar-brand flex justify-center items-center gap-8">
          <Image src={logo} alt="Restaurant Logo" className="w-[200px] " />
          <ul className="hidden md:flex space-x-6 font-extralight text-sm">
            {menuLink.map((item) => (
              <li
                key={item.label}
                className={`nav-item text-gray-200`}
              >
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Navbar Right --- */}
        <div className="hidden md:block">
          <button className="btn-primary">Book a table</button>
        </div>

        {/* --- Mobile Menu Toggler --- */}
        <button
          className="navbar-toggler md:hidden  relative  h-7 w-7 "
          onClick={(e) => handleToggle(e)}
          ref={toggleButtonRef}
        >
          <GiHamburgerMenu
            className={`text-white w-7 h-7 absolute top-0 left-0 right-0 bottom-0 ${
              !isMobileMenuOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          />
          <MdRestaurantMenu
            className={`text-white w-7 h-7 absolute top-0 left-0 right-0 bottom-0 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-400`}
          />
        </button>
      </nav>

      {/* --- Mobile sidebar menu --- */}
      <MobileSidbar sidebarRef={sidebarRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} menuLink={menuLink} />
    </header>
  );
};

export default Navbar;
