import React from 'react';
import { FaCogs, FaCheckCircle, FaBug, FaSearch } from 'react-icons/fa';

const QA: React.FC = () => {
    return (
        <section className="bg-white relative z-10 mt-32 pt-20 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap md:flex-nowrap justify-center">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="m-8 max-w-[600px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                -Our Expertise-
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                QUALITY ASSURANCE SERVICES
                            </h2>
                            <p className="text-base text-gray-600">
                                At DeconByte Inc., we ensure your software meets the highest standards 
                                of quality. Our QA team rigorously tests applications to identify and resolve 
                                issues before they reach the end user, ensuring a seamless experience.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                We employ a variety of testing methods, from automated tests to manual 
                                inspections, to guarantee that every aspect of your software performs 
                                as expected under all conditions.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Our goal is to deliver reliable and high-quality software that meets your 
                                users' needs and exceeds their expectations. Partner with us for comprehensive 
                                quality assurance solutions.
                            </p>
                        </div>
                    </div>

                    {/* Icons Content */}
                    <div className="w-full md:w-1/2 px-4 flex justify-center items-center relative">
                        <div className="relative w-64 h-72"> {/* Increased size for more spacing */}
                            <div className="absolute top-0 left-0 transform translate-x-8 translate-y-8 w-12 h-12
                            flex items-center justify-center bg-primary rounded-full mb-8">
                                <FaCogs className="text-white" size={32} />
                            </div>
                            <div className="absolute top-0 right-0 transform -translate-x-8 translate-y-8 w-12 h-12
                            flex items-center justify-center bg-primary rounded-full mb-8">
                                <FaCheckCircle className="text-white" size={32}/>
                            </div>
                            <div className="absolute bottom-0 left-0 transform translate-x-8 -translate-y-8 w-12 h-12
                            flex items-center justify-center bg-primary rounded-full mb-8">
                                <FaBug className="text-white" size={32} />
                            </div>
                            <div className="absolute bottom-0 right-0 transform -translate-x-8 -translate-y-8 w-12 h-12
                            flex items-center justify-center bg-primary rounded-full mb-8">
                                <FaSearch className="text-white" size={32}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QA;
