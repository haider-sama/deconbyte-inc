import React from 'react';
import { cardsData } from '../../../config';


const ChooseSection: React.FC = () => {
    return (
        <section className="bg-white relative z-10 pt-32 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:justify-between items-start">
                    
                    {/* Left side - Text */}
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="text-left mb-8 lg:mb-12 max-w-[510px]">
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                Why Choose Us?
                            </h2>
                            <p className="text-base text-gray-600 mb-4">
                            At DeconByte Inc., we pride ourselves on providing end-to-end solutions that encompass much more than traditional software development. 
                            Our team is driven by a commitment to excellence, ensuring that each project we undertake is meticulously crafted to align with your business objectives. 
                            By blending innovation with a deep understanding of industry needs, we create bespoke solutions tailored to maximize operational efficiency, streamline workflows, 
                            and enhance customer experiences. From implementing state-of-the-art technologies to fostering digital transformations, our solutions are designed to empower businesses to stay ahead in an ever-evolving market.
                            </p>
                            <p className="text-base text-gray-600">
                            Our approach goes beyond delivering software—we forge long-term partnerships with our clients, guiding them through every stage of growth. 
                            We believe in building systems that are not only functional but scalable and adaptable to future needs. 
                            By focusing on customization, security, and ongoing optimization, we ensure that our clients have the tools they need to meet the unique challenges of their industry. 
                            Whether you’re a startup looking for rapid expansion or an established company aiming for optimization, our team remains committed to supporting your journey with unmatched service and unwavering reliability.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Cards */}
                    <div className="w-full lg:w-1/2 px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {cardsData.map((card, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <div className="mb-4">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-dark mb-2">{card.title}</h3>
                                <p className="text-base text-gray-600">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseSection;
