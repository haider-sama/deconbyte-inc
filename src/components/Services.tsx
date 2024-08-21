import { services } from "../config";
import React from 'react';
import ServiceCard from "./card/ServiceCard";

const Services: React.FC = () => {
    return (
        <section className="bg-white relative z-10 my-32 pt-20 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-8 lg:mb-12 max-w-[510px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                Our Services
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                What We Offer
                            </h2>
                            <p className="text-base text-gray-600">
                                Where innovation meets reliability, we provide top-tier services that consistently deliver excellence.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                    <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                    />
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
