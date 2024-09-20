import MaxWidthWrapper from "../MaxWidthWrapper";
import "../../index.css";
import { FiMapPin, FiMail } from 'react-icons/fi';
import { socialLinks } from "../../config";

const InfoNav = () => {
    return (
        <MaxWidthWrapper className="bg-white px-2.5 md:px-20 relative hidden md:block">
            <div className="w-full p-4">
                <nav className="px-4 lg:px-6 w-full">
                    <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                        {/* Left Side - Location and Email Section */}
                        <div className="flex items-center space-x-6">
                            {/* Location */}
                            <div className="flex items-center space-x-2">
                                <FiMapPin className="text-gray-900" />
                                <span className="text-gray-600">2104 - Unit 2, Ardmore Blvd, Pittsburgh, PA 15221</span>
                            </div>
                            {/* Email */}
                            <div className="flex items-center space-x-2">
                                <FiMail className="text-gray-900" />
                                <span className="text-gray-600">info@deconbyte.com</span>
                            </div>
                        </div>
                        

                            <div className="flex items-center flex-wrap justify-start space-x-4 ">
                            {socialLinks.map((link, index) => {
                                    return (
                                        <a key={index} href={link.href} target="_blank" className="text-gray-800 hover:text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                <path d={link.svgPath}></path>
                                            </svg>
                                        </a>
                                    );
                                }
                            )}
                        </div>

                    </div>
                </nav>
            </div>
        </MaxWidthWrapper>
    );
};

export default InfoNav;
