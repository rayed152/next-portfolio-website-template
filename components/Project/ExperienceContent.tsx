import React from "react";

interface ExperienceContentProps {
  company?: string;
  title: string;
  dates: string;
  description: string;
  technologies?: string[]; // Optional technologies list
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  title,
  company,
  dates,
  description,
  technologies,
}) => {
  return (
    <div className="overflow-auto  p-4 text-white">
      <h4 className="text-xl font-bold mb-1">→ {title}</h4>
      {company && <h3 className="text-lg font-semibold mb-2">{company}</h3>}
      <p className="text-sm mb-1">{dates}</p>
      <p className="mb-4 max-w-96">{description}</p>
      {technologies && (
        <div className="flex">
          {technologies.map((tech, index) => (
            <p key={index} className="mr-2">
              [{tech}]
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceContent;
