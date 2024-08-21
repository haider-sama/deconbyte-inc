import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <section className="bg-white relative z-10 mt-32 pt-20 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto text-center mb-8 lg:mb-12 max-w-[510px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                -Contact Us-
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-base text-gray-600">
                                If you would like to reach out, send an email to: 
                                <a href="mailto:info@deconbyte.com" className="text-primary hover:underline"> info@deconbyte.com</a>
                            </p>
                            <p className="text-base text-gray-600 mt-4">
                                Or contact us through our LinkedIn:
                            </p>
                            <div className="mt-2 flex justify-center">
                                <a href="https://www.linkedin.com/company/deconbyte-inc/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;
