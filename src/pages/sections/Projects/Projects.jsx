import React from "react";
import Card from "../../../components/Cards/Card";
import projectsData from "../../../assets/mock/projects/_projects";

const Projects = () => {
  return (
    <div className="default-container flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl small-caps font-semibold gradient-text tracking-wider">
          My Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;