import React from 'react';
import { Link } from 'react-router-dom';

interface HeadingProps {
  mainHeading: string;
  breadcrumbs: Array<{ label: string, path: string }>;
}

const Heading: React.FC<HeadingProps> = ({ mainHeading, breadcrumbs }) => {
  return (
    <div className="mt-48 mb-8 mx-auto max-w-screen-lg px-4 text-center">
      <nav className="text-white mb-4">
        <ul className="flex justify-center items-center space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              <Link to={crumb.path} className="hover:text-blue-600 transition-colors">
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <svg className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white">{mainHeading}</h1>
    </div>
  );
};

export default Heading;
