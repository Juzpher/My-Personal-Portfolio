import React from "react";
import { useParams, Navigate, NavLink, useNavigate } from "react-router-dom";
import projectData from "../../assets/mock/projects/_projects";
import { IoLinkSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((project) => project.id === id);

  if (!project) {
    return <Navigate to="/NotFound" />;
  }

  const handleGithubClick = (e) => {
    if (project.github !== "/Not-available") {
      window.open(project.github, "_blank", "noopener,noreferrer");
      e.preventDefault();
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="default-container">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className=" flex justify-end items-center">
              <button
                onClick={handleGoBack}
                className="p-2 rounded-full bg-primary-100 text-secondary-default hover:bg-primary-200 transition-colors duration-300"
              >
                <FaArrowLeft className="w-6 h-6" />
              </button>
            </div>
            <div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold gradient-text small-caps">
                  {project.name}
                </h1>
                <p className="text-xl text-secondary-50 mb-4">{project.role}</p>
              </div>
              <div className="tracking-wide text-secondary-default mb-6">
                <p>{project.description}</p>
                <p className="mt-4 tracking-wide">{project.challenges}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-secondary-default mb-2">
                  Built with:
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((icon, index) => (
                    <span
                      key={index}
                      className="p-2 bg-primary-50 text-secondary-default rounded-md flex items-center justify-center"
                    >
                      <img
                        src={icon}
                        alt={`Tool ${index + 1}`}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          console.error(`Failed to load icon ${index + 1}`, e);
                          e.target.style.display = "none";
                        }}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-secondary-default button-outline-icon"
              >
                <IoLinkSharp />
              </a>
              {project.github === "/Not-available" ? (
                <NavLink to="/Not-available" className="button-outline-icon">
                  <FaGithub />
                </NavLink>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleGithubClick}
                  className="button-outline-icon"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
