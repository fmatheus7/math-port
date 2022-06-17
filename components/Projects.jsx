import React from "react";
import anawhaki from "../public/assets/projects/anawhaki.png";
import bibleverses from "../public/assets/projects/bibleverses.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Anawhaki Landing page"
            backgroundImg={anawhaki}
            projectUrl="/anawhaki"
          />
          <ProjectItem
            title="Bible verses"
            backgroundImg={bibleverses}
            projectUrl="/bible"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
