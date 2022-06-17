import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaLink } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Matheus | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer studying tools like React, NEXTjs & more"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Matheus Freire</h2>
          <div className="flex">
            <a href="https://www.linkedin.com/in/matheusfff/" target="_blank">
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/fmatheus7" target="_blank">
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <p>Web Development</p>
        </div>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Material UI
          </p>
        </div>

        {/* Experience */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-4">
            Programming Bootcamps
          </h5>
          <p className="italic">
            <span className="font-bold">
              The Complete 2022 Web Development Bootcamp
            </span>
            <span className="px-2">|</span>Online (Udemy)
          </p>
          <p className="py-1 italic">Online bootcamp (2021-22)</p>
          <a
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            target="_blank"
          >
            <FaLink size={20} />
          </a>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Front-End Web Development</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Bootstrap 4</li>
            <li>Javascript ES6</li>
            <li>React.js</li>
            <li>Git, GitHub and Version Control</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold">
              React Avançado: Crie aplicações com NextJS, Strapi
            </span>
            <span className="px-2">|</span>Online (Udemy)
          </p>
          <p className="py-1 italic">Online bootcamp (2022)</p>
          <a
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            target="_blank"
          >
            <FaLink size={20} />
          </a>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Strapi API</li>
            <li>Styled Components</li>
            <li>SSR with NextJS</li>
            <li>Routering with NextJS</li>
            <li>React good practices</li>
            <li>GraphQL</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">Advanced React</span>
            <span className="px-2">|</span>Online (Scrimba)
          </p>
          <p className="py-1 italic">Online Bootcamp (2021) </p>
          <a
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            target="_blank"
          >
            <FaLink size={20} />
          </a>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>React Performance</li>
            <li>Context</li>
            <li>Hooks</li>
            <li>Router</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
