import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MainHeading = () => {
    const words = ["Development Company", "Design Agency"];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const type = () => {
            const currentWord = words[wordIndex];
            
            if (!isDeleting) {
                setText(currentWord.substring(0, index + 1));
                setIndex(index + 1);

                if (index === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1000); // Delay before deleting
                }
            } else {
                setText(currentWord.substring(0, index - 1));
                setIndex(index - 1);

                if (index === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length); // Move to next word
                }
            }
        };

        const typingInterval = setTimeout(type, 100);

        return () => clearTimeout(typingInterval);
    }, [index, isDeleting, wordIndex]);

    return (
        <div className="mt-[16rem] z-20 relative font-bold text-center text-white w-full max-w-screen-md mx-auto">
            <h1 className="text-lg md:text-xl lg:text-2xl">Robust IT Solutions</h1>
            <h1 className="pt-[1rem] text-4xl md:text-5xl lg:text-6xl px-[1rem]">
                Leading Web {text}
                <span className="blinking-cursor">|</span>
            </h1>
            <h1 className="pt-[2rem] text-medium md:text-lg lg:text-xl px-[1rem]">
                We take care of everything ranging from design and development, ensuring all your needs are done.
            </h1>
            <div className="flex justify-center items-center mt-[1rem]">
                <Link to="/about" className='text-white mt-4 bg-primary hover:bg-white border 
                border-gray-300 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 font-medium 
                rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-3 focus:outline-none'>
                    Learn More
                </Link>
                <Link to="/contact" className='text-gray-900 mt-4 bg-white hover:bg-primary border ml-[1rem]
                border-gray-300 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium 
                rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-3 focus:outline-none'>
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default MainHeading;
