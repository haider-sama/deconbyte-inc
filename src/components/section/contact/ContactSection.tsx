import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa'; // Icons for Address, Phone, and Working Hours

const ContactSection: React.FC = () => {
    return (
        <section className="bg-blue-50 dark:bg-slate-800" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                            Contact
                        </p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                            We'd love to hear from you! Let us know how we can help.
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                Whether you're looking for a new website or want to discuss your business needs, 
                                we are here to assist. Reach out to us anytime, and we'll get back to you shortly.
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <FaMapMarkerAlt className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Our Address
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">2104 - Unit 2, Ardmore Blvd</p>
                                        <p className="text-gray-600 dark:text-slate-400">Pennsylvania, USA</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <FaPhoneAlt className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Contact
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (347) 223 6184</p>
                                        <p className="text-gray-600 dark:text-slate-400">Email: info@deconbyte.com</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <FaRegClock className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Working Hours
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">Mon-Fri: 08:00 - 17:00</p>
                                        <p className="text-gray-600 dark:text-slate-400">Sat-Sun: 08:00 - 12:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                            <form id="contactForm">
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Your name"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                            name="name"
                                        />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Your email address"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <textarea
                                            id="textarea"
                                            cols={30}
                                            rows={5}
                                            placeholder="Write your message..."
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                            name="textarea"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-800 text-white px-6 py-3 text-xl rounded-md sm:mb-0"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
