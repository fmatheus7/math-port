import React from "react";
import anawhaki from "../public/assets/projects/anawhaki.png";
import bibleverses from "../public/assets/projects/bibleverses.png";
import stype from "../public/assets/projects/stype.png";
import cryptoproject from "../public/assets/projects/cryptoproject.png";
import portfolio from "../public/assets/projects/portfolio.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Anawhaki Landing page'
            backgroundImg={anawhaki}
            projectUrl='/anawhaki'
          />
          <ProjectItem
            title='Bible verses'
            backgroundImg={bibleverses}
            projectUrl='/bible'
          />
          <ProjectItem
            title='Speed typing Game'
            backgroundImg={stype}
            projectUrl='/speedtype'
          />
          <ProjectItem
            title='Crypto'
            backgroundImg={cryptoproject}
            projectUrl='/crypto'
          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={portfolio}
            projectUrl='/portfolio'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
