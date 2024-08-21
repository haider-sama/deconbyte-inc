import React from 'react';

const GameDev: React.FC = () => {
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
                                GAME DEVELOPMENT SERVICES
                            </h2>
                            <p className="text-base text-gray-600">
                                At DeconByte Inc., we excel in developing engaging and immersive games 
                                using the latest technologies like Unity3D and Unity2D. Whether you need 
                                a thrilling 2D platformer, a dynamic 3D adventure, or a custom game engine, 
                                we have the expertise to bring your gaming vision to life.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Our team is passionate about creating high-quality games with exceptional 
                                graphics, sound, and gameplay. From concept to launch, we ensure that 
                                every aspect of your game is meticulously crafted to provide an outstanding 
                                experience for players.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                We understand the unique challenges of game development and work closely 
                                with you to deliver a product that not only meets your expectations but 
                                also stands out in the competitive gaming market. Whether it's a single-player 
                                adventure or a multiplayer experience, we're here to make your game a success.
                            </p>
                            <br />
                            <p className="text-base text-gray-600">
                                Partner with DeconByte Inc. for your game development needs and benefit 
                                from a team that is dedicated to pushing the boundaries of what's possible 
                                in the world of gaming.
                            </p>
                        </div>
                    </div>

                    {/* Icons Content */}
                    <div className="w-full md:w-1/2 px-4 flex justify-center items-center relative">
                        <div className="relative w-64 h-72"> {/* Increased size for more spacing */}
                            <img 
                            src="/img/icons8-unity-50.png" 
                            alt="Unity3D"
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GameDev;
