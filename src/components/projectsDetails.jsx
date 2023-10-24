// ProjectDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "./Projects"; // Import the projects data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProjectDetails = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  // Find the project with the matching index in the projects data
  const project = projects.find((p) => p.index === parseInt(index, 10));

  if (!project) {
    // Handle the case where the project is not found, e.g., display a "not found" message
    return <div>Project not found</div>;
  }

  return (
    <div className="p-10">
      
      <button onClick={()=>navigate(-1)} className="p-2 bg-[#47b392] rounded-xl"><FontAwesomeIcon icon={faArrowLeft}/> Go back </button>
      <h2 className="text-4xl text-[#01d293] text-center">{project.title}</h2>
    </div>
  );
};

export default ProjectDetails;
