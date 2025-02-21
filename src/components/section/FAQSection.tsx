import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface AccordionItemProps {
  header: string;
  text: React.ReactNode; // Accept JSX elements
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: AccordionItemProps[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, text }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="w-full rounded-lg bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
      <button className="flex w-full text-left" onClick={handleToggle}>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary">
          {active ? (
            <FaChevronUp className="text-primary" />
          ) : (
            <FaChevronDown className="text-primary" />
          )}
        </div>
        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark">
            {header}
          </h4>
        </div>
      </button>
      <div className={`pl-[62px] duration-200 ease-in-out ${active ? 'block' : 'hidden'}`}>
        <p className="py-3 text-base leading-relaxed text-body-color">
          {text}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({ title, description, faqs }) => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:flex-nowrap">
          {/* Left Side: FAQ Heading */}
          <div className="w-full px-4 lg:w-1/3 text-center md:text-left">
            <div className="mb-[60px] lg:mb-0">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                {title}
              </h2>
              <p className="text-base text-body-color">
                {description}
              </p>
            </div>
          </div>

          {/* Right Side: FAQ Questions */}
          <div className="w-full px-4 lg:w-2/3">
            <div>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} header={faq.header} text={faq.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
