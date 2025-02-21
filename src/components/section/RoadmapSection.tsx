import React from 'react';

interface RoadmapItem {
  title: string;
  description: string;
}

interface RoadmapSectionProps {
  title: string;
  subtitle: string;
  description: string;
  roadmapData: RoadmapItem[];
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ title, subtitle, description, roadmapData }) => {
  return (
    <section className="bg-white relative z-10 py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-8 lg:mb-12 max-w-[750px]">
              <span className="font-semibold text-lg text-gray-600 mb-2 block">
                {subtitle}
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                {title}
              </h2>
              <p className="text-base text-gray-600">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapData.map((item, index) => (
            <div
              key={index}
              className="relative p-6 text-center bg-gray-100 rounded-lg shadow-md overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#212121] transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"></div>
              <div className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                <h3 className="font-bold text-xl mb-4">
                  {item.title}
                </h3>
                <p className="text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
