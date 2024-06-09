import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectComponentLProps {
  title: string;
  description: string;
  imgUrl?: StaticImageData | string;
  link?: string;
}

const ProjectComponentL: React.FC<ProjectComponentLProps> = ({
  title,
  description,
  imgUrl,
  link,
}) => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden">
      <Link href={link || "#"}>
        <div className="border border-solid bg-[#EEEEEE] p-4 max-w-sm rounded-lg h-[100%]">
          <div className="text-center text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out">
            {title}
          </div>
          <div className="mt-2 mb-2 text-gray-700">{description}</div>
          <div className="relative">
            {imgUrl && (
              <Image
                src={imgUrl}
                alt="project-image"
                width={1000}
                height={1000}
                className="h-60 w-full object-cover rounded-t-lg"
              />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectComponentL;
