import React from 'react';

const AppDev: React.FC = () => {
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
                                APP DEVELOPMENT SERVICES
                            </h2>
                            <p className="text-base text-gray-600">
                                At DeconByte Inc., we specialize in building mobile apps using React Native. 
                                From concept to deployment, we create high-quality, cross-platform applications.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Our team delivers robust and scalable mobile solutions that offer seamless 
                                user experiences on both iOS and Android devices.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Partner with us to turn your app ideas into reality with React Native’s 
                                powerful capabilities.
                            </p>
                        </div>
                    </div>

                    {/* Icons Content */}
                    <div className="w-full md:w-1/2 px-4 flex justify-center items-center relative">
                        <div className="relative w-64 h-72"> {/* Increased size for more spacing */}
                            <img 
                            src="/img/icons8-react-native-48.png" 
                            alt="React Native"
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppDev;
