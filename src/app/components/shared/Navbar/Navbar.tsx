"use client";
import logo from "@/assets/img/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //--- toggling mobile menu
  const router: any = useRouter();
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
      <nav className="flex justify-between items-center max-w-[1320px] mx-auto py-4 px-6">
        <div className="navbar-brand flex justify-center items-center gap-8">
          <Image src={logo} alt="Restaurant Logo" className="w-[200px] " />
          <ul className="hidden md:flex space-x-6 font-extralight text-sm">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/clients", label: "Clients" },
              { path: "/blog", label: "Blog" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <li
                key={item.path}
                className={`nav-item ${
                  router.pathname === item.path
                    ? "text-white"
                    : "hover:text-gray-300 text-white"
                }`}
              >
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* --- Navbar Right --- */}
        <div className="hidden md:block">
          <button className="btn-primary">Book a table</button>
        </div>
        <button
          className="navbar-toggler md:hidden"
          onClick={(e) => handleToggle(e)}
          ref={toggleButtonRef}
        >
          <span className="block w-6 h-1 bg-white my-1"></span>
          <span className="block w-6 h-1 bg-white my-1"></span>
          <span className="block w-6 h-1 bg-white my-1"></span>
        </button>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-4">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/portfolio", label: "Portfolio" },
            { path: "/clients", label: "Clients" },
            { path: "/blog", label: "Blog" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`py-2 px-4 w-full text-white ${
                router.pathname === item.path ? "font-bold" : "font-normal"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="btn-primary mt-4">Book a table</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
