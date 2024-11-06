import { ImBlog } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { IoBookOutline, IoHome } from "react-icons/io5";
import {
  MdOutlineImportantDevices,
  MdOutlineMailOutline,
} from "react-icons/md";

export const menuLink = [
  {
    path: "/",
    label: "Home",
    icons: () => <IoHome className="text-gray-200 w-6 h-6" />,
  },
  {
    path: "/about",
    label: "About",
    icons: () => <IoBookOutline className="text-gray-200 w-6 h-6" />,
  },
  {
    path: "#",
    label: "Portfolio",
    icons: () => <MdOutlineImportantDevices className="text-gray-200 w-6 h-6" />,
  },
  {
    path: "#",
    label: "Clients",
    icons: () => <IoIosPeople className="text-gray-200 w-6 h-6" />,
  },
  {
    path: "#",
    label: "Blog",
    icons: () => <ImBlog className="text-gray-200 w-6 h-6" />,
  },
  {
    path: "#",
    label: "Contact",
    icons: () => <MdOutlineMailOutline className="text-gray-200 w-6 h-6" />,
  },
];
