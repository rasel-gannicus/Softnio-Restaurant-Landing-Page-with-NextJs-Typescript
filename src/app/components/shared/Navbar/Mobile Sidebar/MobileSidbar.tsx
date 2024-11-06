import Link from "next/link";
import { MenuLink } from "../Navbar";

const MobileSidbar = ({sidebarRef, isMobileMenuOpen, setIsMobileMenuOpen, menuLink, router}: any) => {
  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 flex flex-col justify-center items-center ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start p-4 ">
        {menuLink.map((item: MenuLink) => (
          <Link
            key={item.path}
            href={item.path}
            className={`py-2 px-4 w-full text-white ${
              router.pathname === item.path ? "font-bold" : "font-normal"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <button className="btn-primary-small mt-4 rounded-full">
          Book a table
        </button>
      </div>
    </div>
  );
};

export default MobileSidbar;
