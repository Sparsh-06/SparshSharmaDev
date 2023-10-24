import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    index: 1,
    projectImage: 'url("")',
    title: "Project 1",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exercitationem pariatur officiis mollitia sunt distinctio fuga iusto ipsa natus delectus?",
    goesTo:'https://github.com/Sparsh-06/Saturday-AI-'
  },
  {
    index: 2,
    projectImage: 'url("/map.pn")',
    title: "Project 2",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exercitationem pariatur officiis mollitia sunt distinctio fuga iusto ipsa natus delectus?",
      goesTo:'https://github.com/Sparsh-06/Saturday-AI-'
  },
  {
    index: 3,
    projectImage: 'url("")',
    title: "Project 3",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exercitationem pariatur officiis mollitia sunt distinctio fuga iusto ipsa natus delectus?",
      goesTo:'https://github.com/Sparsh-06/Saturday-AI-'
  },
  {
    index: 4,
    projectImage: 'url("")',
    title: "Project 4",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exercitationem pariatur officiis mollitia sunt distinctio fuga iusto ipsa natus delectus?",
      goesTo:'https://github.com/Sparsh-06/Saturday-AI-'
  },
  {
    index: 5,
    projectImage: 'url("")',
    title: "Project 5",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exercitationem pariatur officiis mollitia sunt distinctio fuga iusto ipsa natus delectus?",
      goesTo:'https://github.com/Sparsh-06/Saturday-AI-'
  },
  {
    index: 6,
    projectImage: 'url("")',
    title: "Project 6",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exercitationem pariatur officiis mollitia sunt distinctio fuga iusto ipsa natus delectus?",
      goesTo:'https://github.com/Sparsh-06/Saturday-AI-'
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-[#063446] p-4 m-4 rounded-lg shadow-md hover:scale-105 duration-200 cursor-pointer pt-10">
    <div className="flex justify-center">
      <img
        src="/map.png"
        className="rounded-lg h-[216px] w-[384px] bg-cover"
      />
    </div>
    <h3 className="text-lg text-white font-semibold mt-2 text-center">
      {project.title}
    </h3>
    <p className="text-sm my-2 text-[#808dad] text-center">{project.details}</p>
    <a href={project.goesTo} target="_blank" className=""><button className="p-2 hover:scale-110 duration-300 bg-[#01d293] rounded-md">Github</button></a>
  </div>
);

const Projects = () => {
  return (
    <div className="mb-10">
      <h2 className="text-center text-4xl underline text-[#01d293]">
        Projects
      </h2>
      <div className="min-h-screen p-10 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            // <Link to={`/projects/${project.index}`} key={project.index}>
              <ProjectCard project={project} key={index} />
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
export { projects };
