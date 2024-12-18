import Link from "next/link";
import { MenuLink } from "../Navbar";
import { ThemeToggle } from "@/utils/DarkMode/ThemeToggle";

const MobileSidbar = ({
  sidebarRef,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  menuLink,
  themeToggleRef,
}: any) => {
  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 flex flex-col justify-center items-center ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div ref={themeToggleRef} className="absolute top-2 left-2">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-start p-4 gap-1 ">
        {menuLink.map((item: MenuLink) => (
          <Link
            key={item.label}
            href={item.path}
            className={`py-2 px-4 w-full text-gray-200 flex justify-start items-center gap-3`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.icons ? item.icons() : null}
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
