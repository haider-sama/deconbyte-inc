import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="bg-white relative z-10 mt-32 pt-20 py-12 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap md:flex-nowrap justify-center">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="m-8 max-w-[600px]">
                            <span className="font-semibold text-lg text-gray-600 mb-2 block">
                                -Where we emerged-
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                OUR STORY
                            </h2>
                            <p className="text-base text-gray-600">
                                In 2023, DeconByte Inc. was born from a vision held by three determined 
                                individuals, including our CEO, Haider. Starting with a strong foundation 
                                in web development, Haider began his journey with a deep passion for 
                                crafting exceptional web applications. With each project, he learned 
                                valuable lessons and refined his skills, driven by a relentless pursuit of 
                                excellence.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                As DeconByte Inc. took its first steps, Haider and his small team focused on 
                                delivering impactful solutions across various domains, including SAAS products,
                                Fintech, and restaurant management systems. The early days were marked by hard 
                                work and a commitment to innovation, laying the groundwork for future growth.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                With the growing success of the company, Haider expanded his expertise beyond 
                                web development. He gradually embraced app development, 
                                learning React Native to build cutting-edge mobile applications, 
                                and ventured into Unity 2D game development. This journey of continuous 
                                learning and improvement allowed DeconByte Inc. to offer even more diverse 
                                and sophisticated solutions.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Today, DeconByte Inc. is a thriving company with a dedicated team specializing 
                                in web development, game development, React Native apps, and Unity3D game 
                                development. Our commitment to crafting the best possible solutions for 
                                our clients reflects Haider's journey and the lessons learned along the way. 
                                We’re excited to keep pushing the boundaries of technology and helping 
                                businesses succeed in the digital age.
                            </p>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
                        <img 
                        src="img/story.webp" 
                        alt="DeconByte Inc. Journey"
                        className="max-w-full h-auto object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
