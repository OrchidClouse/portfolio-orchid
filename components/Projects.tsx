import React from 'react';
import { IProject, ProjectCard } from './ProjectCard';

const projectsData: IProject[] = [
  {
    url: 'https://tvoe.live/',
    image: '/TvoeFullLogo.svg',
    title: 'Tvoe Live',
    stack: `Online cinema. React JS/TS, NextJS, Redux Toolkit, SCSS Modules, TailwindCSS, Ionic, Capacitor, VideoJS, React Native`,
  },
  {
    url: 'https://polyn.ai/',
    image: '/PolynLogo 1.svg',
    title: 'Polyn AI',
    stack: `Developed a web application on Next.js that allows users to apply for jobs, create job posts, and manage their company profiles.`,
  },
  {
    url: 'https://vk.com/antipoff_group',
    image: '/antipiff 1.svg',
    title: 'Antipoff Group',
    stack: `Developed the Verge Systems website using React.js`,
  },
  {
    url: 'https://crypto-ton-demo.vercel.app',
    image: '/TurboTon.svg',
    title: 'TurboTON',
    stack: `Pet project. React TS, CSS, GSAP, Framer-motion, Redux`,
  },
  {
    url: 'https://crypto-landing-roadmap.vercel.app/',
    image: '/money.gif',
    title: 'Crypto Roadmap',
    stack: `Pet project. React TS, TailwindCSS`,
  },
  {
    url: 'https://ultimatevpn-demo.vercel.app',
    image: '/ult.svg',
    title: 'UltimateVPN',
    stack: `Pet project. React JS, NextJS, Framer-motion, TailwindCSS`,
  },
  {
    url: 'https://ai-landing-gamma.vercel.app',
    image: '/logosaas.png',
    title: 'AI Landing',
    stack: `Pet project. React TS, NextJS, Framer-motion, TailwindCSS`,
  },
];

const Projects = () => {
  return (
    <section id='projects' className='px-4'>
      <h2 className='text-white font-semibold text-center text-4xl sm:text-6xl pt-8'>
        PROJECTS
      </h2>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {projectsData.map((el, index) => {
            return (
              <ProjectCard
                key={index}
                url={el.url}
                title={el.title}
                image={el.image}
                stack={el.stack}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
