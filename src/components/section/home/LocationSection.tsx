import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa'; // Icons for Address, Phone, and Working Hours

const LocationSection: React.FC = () => {
    return (
        <section className="relative bg-white" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-blue-600">
                            Contact
                        </p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
                            We'd love to hear from you! Let us know how we can help.
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600">
                                Whether you're looking for a new website or want to discuss your business needs, 
                                we are here to assist. Reach out to us anytime, and we'll get back to you shortly.
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <FaMapMarkerAlt className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                                            Our Address
                                        </h3>
                                        <p className="text-gray-600 ">2104 - Unit 2, Ardmore Blvd</p>
                                        <p className="text-gray-600">Pennsylvania, USA</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <FaPhoneAlt className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                                            Contact
                                        </h3>
                                        <p className="text-gray-600">Mobile: +1 (347) 223 6184</p>
                                        <p className="text-gray-600">Email: info@deconbyte.com</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <FaRegClock className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                                            Working Hours
                                        </h3>
                                        <p className="text-gray-600">Mon-Fri: 08:00 - 17:00</p>
                                        <p className="text-gray-600">Sat-Sun: 08:00 - 12:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="h-fit max-w-6xl p-5 md:p-12">
                            <div style={{ width: '100%' }}>
                                <iframe
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    scrolling="no"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2104%20-%20Unit%202,%20Ardmore%20Blvd%20%20Pennsylvania,%20USA+(DeconByte%20Inc.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                >
                                    <a href="https://www.gps.ie/">gps tracker sport</a>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
