import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Creating a social media clone involves replicating the functionality and features of an existing social media platform."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Creating an e-commerce website involves several steps, from planning and design to development and launch. "
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" A chatting app is a software application that enables users to exchange text messages, multimedia content and other types of digital communication in real-time. "
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Creating a social media clone involves replicating the functionality and features of an existing social media platform."
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Creating an e-commerce website involves several steps, from planning and design to development and launch. "
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" A chatting app is a software application that enables users to exchange text messages, multimedia content and other types of digital communication in real-time. "
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
