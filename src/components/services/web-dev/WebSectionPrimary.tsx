import React from 'react';

const WebSectionPrimary: React.FC = () => {
    return (
        <section className="bg-white relative z-10 py-16 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap md:flex-nowrap justify-center">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="m-8 max-w-[600px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                Our Expertise
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                WEB DEVELOPMENT SERVICES
                            </h2>
                            <p className="text-base text-gray-600">
                                At DeconByte Inc., we specialize in creating high-quality websites using 
                                modern technologies like React.js and Next.js. Whether you need a custom web 
                                solution, a restaurant management system, or a comprehensive SAAS product, 
                                we have the expertise to deliver tailored solutions that meet your needs.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Our team is dedicated to providing top-notch web development services. 
                                From crafting responsive designs to building complex backend systems, 
                                we ensure that every project is executed with precision and creativity.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Partner with DeconByte Inc. for your web development needs, and experience 
                                the benefits of working with a team that is passionate about technology 
                                and committed to your success.
                            </p>
                        </div>
                    </div>

                    {/* Icons Content */}
                    <div className="w-full md:w-1/2 px-4 flex justify-center items-center relative">
                        <div className="relative w-64 h-72"> {/* Increased size for more spacing */}
                            <img 
                            src="/img/icons8-react-native-48.png" 
                            alt="React.js"
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16"
                            />
                            <img 
                            src="/img/icons8-nextjs-48.png" 
                            alt="Next.js"
                            className="absolute top-8 right-0 transform translate-x-1/2 w-16 h-16"
                            />
                            <img 
                            src="/img/icons8-nodejs-48.png" 
                            alt="Node.js"
                            className="absolute top-8 left-0 transform -translate-x-1/2 w-16 h-16"
                            />
                            <img 
                            src="/img/icons8-express-js-50.png" 
                            alt="Express.js"
                            className="absolute bottom-8 right-0 transform translate-x-1/2 w-16 h-16"
                            />
                            <img 
                            src="/img/icons8-postgresql-48.png" 
                            alt="PostgreSQL"
                            className="absolute bottom-8 left-0 transform -translate-x-1/2 w-16 h-16"
                            />
                            <img 
                            src="/img/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png" 
                            alt="MongoDB"
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WebSectionPrimary;
