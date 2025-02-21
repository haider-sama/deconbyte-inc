import React from 'react';

interface ProjectCardProps {
  projectImage: string;
  projectName: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectImage,
  projectName,
  projectLink,
}) => {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-sm bg-white border border-gray-300 rounded-lg shadow m-10 block
      hover:border-gray-400
      focus:ring-4 focus:ring-gray-200 
      px-4 py-2 sm:px-5 sm:py-3 focus:outline-none"
    >
      {/* Project Image */}
      <img
        className="rounded-t-lg"
        src={projectImage}
        alt={projectName}
      />
      <div className="p-5 text-center">
        {/* Project Name */}
        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {projectName}
        </h4>
      </div>
    </a>
  );
};

export default ProjectCard;
