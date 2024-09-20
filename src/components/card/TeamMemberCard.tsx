import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

interface TeamMemberCardProps {
  profilePic: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ profilePic, name, role, description, linkedin, github, facebook }) => {
  return (
    <div className="max-w-sm px-4">
      <div className="p-8 md:px-6 xl:px-8 border border-gray-300 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col items-center">
        <div className="w-24 h-24 mb-4">
          <img src={profilePic} alt={`${name}'s profile`} className="w-full h-full rounded-full object-cover" />
        </div>
        <h4 className="font-semibold text-xl text-gray-900 mb-2">{name}</h4>
        <h5 className="text-gray-600 text-md mb-4">{role}</h5>
        <p className="text-gray-800 text-center mb-4">{description}</p>
        <div className="flex space-x-4">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin size={20} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaGithub size={20} />
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaFacebook size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
