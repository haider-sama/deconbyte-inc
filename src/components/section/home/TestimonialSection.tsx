import React from 'react';
import { testimonials } from '../../../config';


const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 relative z-10">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <figure className="max-w-screen-md mx-auto">
          <svg className="h-12 mx-auto mb-6 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              "Our clients' satisfaction is our top priority. Here's what they have to say about their experience with us."
            </p>
          </blockquote>
        </figure>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {testimonials.map((test, index) => (
            <figure key={index} className="w-full max-w-sm p-6 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg">
              <blockquote>
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  {test.testimonial}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-12 h-12 rounded-full" src={test.profilePic} alt={test.name} />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">{test.name}</div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{test.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
