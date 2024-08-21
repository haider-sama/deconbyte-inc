import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
    return (
        <section className="bg-white relative z-10 mt-32 pt-20 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto text-center mb-8 lg:mb-12 max-w-[510px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                -About Our Company-
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                WHO WE ARE
                            </h2>
                            <p className="text-base text-gray-600">
                            Founded in 2023, DeconByte Inc. is a leading software development company committed 
                            to delivering innovative solutions for businesses. Our expertise spans SAAS products, 
                            Fintech solutions, restaurant management systems, and a range of other software 
                            applications , all designed to help organizations excel in today's digital world.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                            At DeconByte Inc., we understand that technology can be a game-changer for 
                            businesses, driving growth and success. With a deep passion for cutting-edge 
                            software development and a team of highly skilled professionals, 
                            we are dedicated to providing our clients with the tools and solutions they 
                            need to stay competitive in an ever-evolving landscape.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                <Link to="/about" className='text-white mt-4 bg-primary hover:bg-white border 
                border-gray-300 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 font-medium 
                rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-3 focus:outline-none'>
                    Our Story
                </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
