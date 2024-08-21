import { infoLinks } from "../../config";
import { Link } from "react-router-dom";

const InfoCard = () => {
    return (
        <div className="bg-white rounded-2xl md:px-8 lg:px-16 py-8 my-32 mx-4 md:mx-24 lg:mx-32 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-gray-900 font-bold text-2xl md:text-3xl p-4">
                    We excel in React, Next.Js, FireBase, NodeJs, Unity3D & React-Native App Development
                </h2>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center text-gray-600 text-center">
                <h2 className="text-lg sm:text-xl mb-4">For consultation and project discussion?</h2>
                <Link to="/contact" className="
                text-white mt-4 bg-primary hover:bg-white border 
                border-gray-300 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 font-medium 
                rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-3 focus:outline-none">
                    Contact us
                </Link>
            </div>
            <div className="flex-grow flex justify-center text-2xl mt-4 w-full">
                <ul id="info-links" className="flex flex-wrap justify-center sm:justify-between w-full max-w-4xl font-medium">
                    {infoLinks.map((link, index) => (
                        <li key={index} className="flex items-center p-1 text-gray-400 m-2">
                            <img src={link.src} alt={link.name} className="w-12 h-12 sm:w-16 sm:h-16" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default InfoCard;
