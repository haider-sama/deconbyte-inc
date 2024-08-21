import React from 'react';
import { FaPalette, FaMobileAlt, FaDesktop, FaSketch } from 'react-icons/fa';

const UIUX: React.FC = () => {
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
                                UI/UX DESIGN SERVICES
                            </h2>
                            <p className="text-base text-gray-600">
                                At DeconByte Inc., we craft intuitive and visually appealing designs 
                                that enhance user experiences. Our team excels in creating designs for 
                                both web and mobile platforms, ensuring that your product is both beautiful 
                                and functional.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                We focus on understanding your users' needs to deliver designs that are 
                                not only aesthetically pleasing but also highly usable. From wireframes to 
                                final mockups, our approach is tailored to meet your specific requirements.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Partner with us to transform your ideas into engaging and effective designs 
                                that make a lasting impression.
                            </p>
                        </div>
                    </div>

                    {/* Icons Content */}
                    <div className="w-full md:w-1/2 px-4 flex justify-center items-center relative">
                        <div className="relative w-64 h-72"> {/* Increased size for more spacing */}
                            <div className="absolute top-0 left-0 transform translate-x-8 translate-y-8 w-12 h-12
                            flex items-center justify-center bg-primary rounded-full mb-8">
                                <FaPalette className="text-white" size={32} />
                            </div>
                            <div className="absolute top-0 right-0 transform -translate-x-8 translate-y-8 w-12 h-12
                            flex items-center justify-center bg-primary rounded-full mb-8">
                                <FaMobileAlt className="text-white" size={32}/>
                            </div>
                            <div className="absolute bottom-0 left-0 transform translate-x-8 -translate-y-8 w-12 h-12
                            flex items-center justify-center bg-primary rounded-full mb-8">
                                <FaDesktop className="text-white" size={32} />
                            </div>
                            <div className="absolute bottom-0 right-0 transform -translate-x-8 -translate-y-8 w-12 h-12
                            flex items-center justify-center bg-primary rounded-full mb-8">
                                <FaSketch className="text-white" size={32}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UIUX;
