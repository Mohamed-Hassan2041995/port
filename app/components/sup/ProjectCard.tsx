import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
  languages: string;
  github: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  url,
  languages,
  github,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61]">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      </a>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <p className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Created by: {languages}
        </p>{" "}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline mt-2 block"
        >
          View on GitHub
        </a>{" "}
      </div>
    </div>
  );
};

export default ProjectCard;
