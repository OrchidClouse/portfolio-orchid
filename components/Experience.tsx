import Image from 'next/image';
import React from 'react';
import Skill from './Skill';

const currentSkills = [
  'React',
  'Redux Toolkit',
  'NextJS',
  'React Native',
  'TailwindCSS',
  'SCSS modules',
];

const Experience: React.FC<{}> = () => {
  return (
    <section id='experience'>
      <h2 className='text-white font-semibold text-center text-6xl   pt-[35px]'>
        EXPERIENCE
      </h2>
      <p className=' tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl '>
        EXPLORE NOW
      </p>
      <div className=' container mx-auto 2xl '>
        <div className='md:flex md:flex-row md:justify-between pt-5'>
          <div className='flex items-center gap-3'>
            <Image
              src={'/TvoeIcon.svg'}
              height={30}
              width={30}
              alt={'Korolev Maksim'}
            />
            <p className='text-gray-300 '>
              <span className='font-semibold'>Tvoe Live /</span> Frontend
              Developer
            </p>
          </div>
          <p className='text-gray-300 md:pt-0 pt-3'>
            January 2024 - Present, Russia
          </p>
        </div>

        <p className='text-gray-300 pt-5'>
          I currently work at Tvoe Live, which is an online movie theater. As a
          React.js developer with over 3 years of experience, I have a strong
          foundation of experience, I have a strong foundation in building
          dynamic and responsive mobile and web applications.
          <br />
          <br />
          My experience with React has allowed me to develop cross-platform
          applications that easily work on iOS and Android platforms. Android
          platforms. In addition, my knowledge of React.js allows me to create
          fast, scalable and dynamic web pages with great user experience. Pages
          with excellent user experience. I have a deep understanding of of
          component architecture and state management, and I am well-versed in
          the latest web development trends and technologies.
        </p>
        <div className='flex-col flex sm:flex-row gap-4'>
          {currentSkills.map((skill, index) => (
            <Skill title={skill} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
