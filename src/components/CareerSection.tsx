import React from 'react';
import { Link } from 'react-router-dom';

const CareerSection: React.FC = () => {
    return (
        <section className="bg-white relative z-10 mb-32 pt-20 py-12 w-full">
            <div className="border-t border-gray-300 w-1/2 mx-auto p-12"></div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-8 lg:mb-12 max-w-[510px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                -Kickstart your career at DeconByte-
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-2">
                                JOIN US
                            </h2>
                            <p className="text-base text-gray-600">
                                We're on the journey for a better
                            </p>
                            <div className="flex justify-center items-center py-4">
                            <Link to="/careers" className='text-white mt-4 bg-primary hover:bg-white border 
                            border-gray-300 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 font-medium 
                            rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-3 focus:outline-none'>
                                CAREERS
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default CareerSection;
