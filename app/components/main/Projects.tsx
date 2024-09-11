import React from "react";
import ProjectCard from "../sup/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[20]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/shopsy.png"
          title="Shopsy - Your perfect destination for online shopping"
          description="Shopsy is a modern and easy-to-use e-commerce platform that provides you with the best deals on a wide range of products. If you're looking for the latest fashion trends, Shopsy has it all."
          url="https://shopsy-market.netlify.app"
          languages="React, Tailwind CSS"
          github="https://github.com/Mohamed-Hassan2041995/Shopsy"
        />
        <ProjectCard
          src="/task-manager.png"
          title="Task Manager - Streamline Your Workflow"
          description="Task Manager is an intuitive and powerful tool designed to help you manage your tasks and projects efficiently. Whether you're working individually or as part of a team."
          url="https://manger-your-taske.netlify.app/"
          languages="React, Bootstrap"
          github="https://github.com/Mohamed-Hassan2041995/task-list-manager"
        />
        <ProjectCard
          src="/your-shop.png"
          title="Come Shopping - Your perfect destination for online shopping"
          description="Come Shopping is your ultimate destination for stylish and high-quality fashion. As a modern and user-friendly e-commerce platform."
          url="https://come-shoping.netlify.app/"
          languages="React, Bootstrap"
          github="https://github.com/Mohamed-Hassan2041995/my-shop"
        />
      </div>
    </div>
  );
};

export default Projects;
