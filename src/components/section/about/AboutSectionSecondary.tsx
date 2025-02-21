import React from 'react';
import { cardDataAbout } from '../../../config';

const AboutSectionSecondary: React.FC = () => {
    return (
        <section className="bg-white relative z-10 py-32 w-full">
            <div className="mx-auto">
                <div className="flex flex-wrap justify-center lg:justify-between items-start">
                                       {/* Right side - Cards */}
                                       <div className="w-full lg:w-1/2 px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {cardDataAbout.map((card, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <div className="mb-4">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-dark mb-2">{card.title}</h3>
                                <p className="text-base text-gray-600">{card.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Left side - Text */}
                    <div className="w-full lg:w-1/2 px-4 py-4 mb-8 lg:mb-0 bg-primary">
                        <div className="text-left mb-8 lg:mb-12 max-w-[510px]">
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                                Our Vision
                            </h2>
                            <p className="text-base text-white mb-4">
                                When we started DeconByte Inc., our vision was to provide new businesses with the opportunities for optimal growth and the desire to brand themselves. Since then, our vision has been constantly expanding, and we have been striving to not only find new ways to enable growth for our clients but also support them on their journey towards success. Even if you are just starting with us, we make it easy for you to embark on the path to success with just a phone call. We materialize ideas, designs, and contributions with professional planning and set up systematic groundwork for businesses. We ensure that small business owners who are just starting will have a great experience investing time and hard work into their ventures. DeconByte Inc. takes that hard work’s reward to the next level and drives your growth towards a brighter market future.
                            </p>
   
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                                We Bring Promise
                            </h2>
                            <p className="text-base text-white">
                                We fulfill our promise to help you gain the brand recognition you seek. In today’s competitive environment, building a lasting presence that allows you to make a systematic impression is challenging. Professionalism and deriving success take time, which is why our team ensures you cover all needs smoothly and without questions asked. We are committed to providing you with the best experience in establishing and promoting your brand to a broader audience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionSecondary;
