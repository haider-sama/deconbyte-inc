import React from 'react';


const AboutSectionPrimary: React.FC = () => {
    return (
        <section className="bg-white relative z-10 pt-20 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
                    {/* Right side - Text */}
                    <div className="w-full lg:w-auto px-4 text-center lg:text-left">
                        <div className="mx-auto lg:mb-12 max-w-[510px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                WHAT WE DO?
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                We make your business ideas a reality
                            </h2>
                            <p className="text-base text-gray-600 mb-4">
                            At DeconByte Inc., we empower your business to thrive and establish a strong presence in the digital realm. 
                            Our mission is to bring your vision to life through innovative design, comprehensive marketing 
                            strategies, and expert development. Whether you’re launching a new venture or looking to elevate an 
                            existing business, we are committed to delivering solutions that drive growth and success. 
                            From crafting visually stunning websites to devising strategic marketing plans, we ensure every 
                            aspect of your digital journey is handled with expertise and care. Partner with us to transform your 
                            ideas into reality and achieve long-term success in the ever-evolving digital landscape.
                            </p>
                        </div>
                    </div>
                    {/* Left side - Image */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <img 
                            src="/img/about.png" 
                            alt="Team" 
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionPrimary;
