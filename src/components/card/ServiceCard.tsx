import React from 'react';

import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, href }) => {
  return (
    <div className="max-w-sm px-4">
      <div className="p-10 md:px-8 xl:px-10 border border-gray-300 
      rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col items-center justify-center">
        <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-full mb-8">
          <Icon className="text-white" size={32} />
        </div>
        <h4 className="font-semibold text-xl text-gray-900 mb-3 tracking-tight">
          {title}
        </h4>
        <p className="text-gray-800 text-center">
          {description}
        </p>
        <Link to={href} className='text-white mt-4 bg-primary hover:bg-white border 
        border-gray-300 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 font-medium 
        rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-3 focus:outline-none'>
            Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
