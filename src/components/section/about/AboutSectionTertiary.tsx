import React from 'react';
import { Link } from 'react-router-dom';

const AboutSectionTertiary: React.FC = () => {
    return (
        <section className="bg-white relative z-10 pt-20 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
                    {/* Right side - Text */}
                    <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
                        <div className="mx-auto lg:mb-12 max-w-[510px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                WHAT ARE YOU WAITING FOR?
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                DeconByte Inc. is the Right Company for Your Business Idea!
                            </h2>
                            <p className="text-base text-gray-600 mb-4">
                                Looking for a complete web design solution at one stop? Need a top-notch Web Development Company? At DeconByte Inc., we envision your business ideals and work diligently to achieve your goals. If you're seeking effective brand remarketing, we’ve got you covered. Our comprehensive digital services make us the definitive choice for your business growth, ensuring your investment of time and effort is well-placed.
                            </p>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                Get in Touch with One of the Best Web Development Companies
                            </h2>
                            <p className="text-base text-gray-600 mb-4">
                                We believe in the true potential of every business, no matter its size. Our team brings your business ideals to life with stunning web design choices. Every step your business takes is a significant milestone for both our team and your success. Empower your business today with DeconByte Inc. Contact us anytime, and we'll provide a personalized quote. Let us help you reach a massive audience and boost the quality of your business.
                            </p>
                            {/* Call to Action Button */}
                            <div className="flex justify-center lg:justify-start mt-8">
                                <Link to="/contact" className='text-white mt-4 bg-primary hover:bg-white border 
                                border-gray-300 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 font-medium 
                                rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-3 focus:outline-none'>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Left side - Image */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <img 
                            src="/img/about-2.png" 
                            alt="Team" 
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionTertiary;
