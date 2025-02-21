import React from 'react';
import { projects } from '../../../config';
import ProjectCard from '../../card/ProjectCard';

const ProjectSection: React.FC = () => {
  return (
    <section className="bg-white relative z-10 py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-8 lg:mb-12 max-w-[650px]">
              <span className="font-semibold text-lg text-gray-600 mb-2 block">
                Our Portfolio
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl text-dark mb-4">
                Our Recently Completed Projects
              </h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {projects.map((project, index) => (
            <ProjectCard 
                key={index}
                projectImage={project.projectImage}
                projectName={project.projectName}
                projectLink={project.projectLink}
            />
))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
