import { jobs } from "../config";
import React from 'react';
import JobCard from "./card/JobCard";

const CareerList: React.FC = () => {
    return (
        <section className="bg-white relative z-10 my-32 pt-20 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-8 lg:mb-12 max-w-[510px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                -Let's Grow Together-
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                JOIN THE TEAM
                            </h2>
                            <p className="text-base text-gray-600">
                                For careers at DeconByte Inc., We're offering the following roles
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, index) => (
                    <JobCard
                    key={index}
                    icon={job.icon}
                    title={job.title}
                    description={job.description}
                    href={job.href}
                    address={job.address}
                    employmentType="Full-time"
                    />
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}

export default CareerList;
