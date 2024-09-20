import MaxWidthWrapper from "./MaxWidthWrapper";
import { contactList, navLinks, socialLinks } from "../config";
import { Link } from "react-router-dom";

const Footer = () => {
    const servicesLink = navLinks.find(link => link.title === 'Services');
    const currentYear = new Date().getFullYear();

    return (
        <MaxWidthWrapper className="z-10">
            <footer className="p-6 bg-white border-t border-gray-300">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 
                md:grid-cols-4 mb-8">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-gray-900">Company</h2>
                        <div className="flex flex-col space-y-2 text-md">
                            {navLinks.map((link, index) => {
                                // Render main titles only
                                if (!link.dropdown) {
                                    return (
                                        <Link key={index} to={link.href} className="hover:underline text-gray-600 hover:text-gray-900">
                                            {link.title}
                                        </Link>
                                    );
                                }
                                return null; // Skip dropdown links here
                            })}
                        </div>
                    </div>
                    {servicesLink && (
                        <div className="flex flex-col space-y-4">
                            <h2 className="font-medium text-gray-900">Services</h2>
                            <div className="flex flex-col space-y-2 text-md">
                                {servicesLink.dropdown?.map((subLink, index) => (
                                    <Link key={index} to={subLink.href} className="hover:underline text-gray-600 hover:text-gray-900 break-words">
                                        {subLink.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col relative space-y-4">
                        <h2 className="font-medium text-gray-900">Contact</h2>
                        <div className="flex flex-col space-y-2 text-md max-w-xs sm:max-w-md">
                            {contactList.map((link, index) => {
                                    return (
                                        <Link key={index} to="/" className="hover:underline text-gray-600 hover:text-gray-900 break-words">
                                            {link.title}
                                        </Link>
                                    );
                                }
                            )}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h2 className="font-medium text-gray-900">Social</h2>
                        <div className="flex items-center flex-wrap justify-start space-x-4">
                            {socialLinks.map((link, index) => {
                                    return (
                                        <a key={index} href={link.href} target="_blank" className="text-gray-400 hover:text-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                <path d={link.svgPath}></path>
                                            </svg>
                                        </a>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex items-center text-center justify-center px-6 py-4 text-md text-gray-600 border-t border-gray-200">
                    DeconByte Inc. &copy; {currentYear}. All rights reserved.
                </div>         
            </footer>
        </MaxWidthWrapper>
    );
}

export default Footer;
