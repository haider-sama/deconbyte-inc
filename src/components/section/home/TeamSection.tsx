import React from 'react';
import TeamMemberCard from '../../card/TeamMemberCard';
import { teamMembers } from '../../../config';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white relative z-10 py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-8 lg:mb-12 max-w-[650px]">
              <span className="font-semibold text-lg text-gray-600 mb-2 block">
                BUILDING TEAM
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl text-dark mb-4">
                The Talented People Behind the Scenes of the Organization
              </h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                profilePic={member.profilePic}
                name={member.name}
                role={member.role}
                description={member.description}
                linkedin={member.linkedin}
                github={member.github}
                facebook={member.facebook}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
