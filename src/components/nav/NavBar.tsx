import { Link } from "react-router-dom";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { navLinks } from "../../config";
import "../../index.css";
import { FiPhone } from "react-icons/fi";

type NavLink = { href: string; title: string };
type DropdownNavLink = { title: string; dropdown: NavLink[] };

const isDropdownLink = (link: NavLink | DropdownNavLink): link is DropdownNavLink => {
    return (link as DropdownNavLink).dropdown !== undefined;
};

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const [bgColor, setBgColor] = useState("transparent"); // State for background color

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const handleScroll = () => {
        const isDesktop = window.innerWidth >= 768; // Tailwind's md breakpoint (768px)
        if (isDesktop) {
            if (window.scrollY > 50) { // Change this value as needed
                setBgColor("bg-blue-900"); // Background color when scrolled
            } else {
                setBgColor("bg-transparent"); // Background color at the top
            }
        } else {
            setBgColor("bg-transparent"); // Always transparent on mobile
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll); // Add scroll event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll); // Clean up scroll event listener
        };
    }, []);

    return (
        <MaxWidthWrapper>
            <div className={`w-full px-2.5 md:px-20 ${bgColor}`}>
            <nav className="px-4 lg:px-6 py-2.5 w-full">
                <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                    <div className="flex-shrink-0">
                        <div className="text-2xl font-semibold whitespace-nowrap text-white">
                            <Link to="/">DeconByte Inc<span className="text-red-600">.</span></Link>
                        </div>
                    </div>
                    <div className="flex-grow hidden lg:flex justify-center">
                        <ul className="flex space-x-12 font-medium">
                            {navLinks.map((link, index) => (
                                isDropdownLink(link) ? (
                                    <li 
                                        key={index} 
                                        className="relative text-xl"
                                        ref={dropdownRef}
                                    >
                                        <button 
                                            className="text-white hover:text-gray-200 text-base hover:underline flex items-center"
                                            onClick={handleDropdownToggle}
                                        >
                                            {link.title}
                                            <HiChevronDown 
                                                className={`h-4 w-4 transition-transform ml-1 ${dropdownOpen ? "rotate-180" : "rotate-0"}`} 
                                            />
                                        </button>
                                        {dropdownOpen && (
                                            <div className="absolute bg-white rounded-lg shadow-lg mt-2 min-w-[200px]">
                                            <ul className="space-y-1">
                                                {link.dropdown.map((sublink, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link 
                                                            to={sublink.href} 
                                                            className="block text-sm px-4 py-2 text-gray-600 hover:text-gray-900 hover:underline hover:bg-gray-200 hover:rounded-lg"
                                                        >
                                                            {sublink.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            </div>
                                        )}
                                    </li>
                                ) : (
                                    <li key={index}>
                                        <Link 
                                            to={link.href} 
                                            className="block text-white hover:text-gray-200 hover:underline"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>

                    <div className="items-center space-x-4 hidden md:flex">
                    <FiPhone className="text-white" fill="white" size={24} />
                    <div className="text-white text-lg">
                        <span className="block">For any inquiries?</span>
                        <span className="block">Call: +1 (347) 223 6184</span>
                    </div>
                </div>
                </div>
            </nav>
            </div>
        </MaxWidthWrapper>
    );
}

export default NavBar;