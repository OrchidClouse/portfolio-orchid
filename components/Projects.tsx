import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects: React.FC<{}> = () => {
  return (
    <section id='projects'>
      <h2 className='text-white font-semibold text-center text-6xl pt-[35px]'>
        PROJECTS
      </h2>
      <div className=' container mx-auto 2xl'>
        <div className='grid grid-cols-2 grid-rows-3 gap-4'>
          <div>
            {' '}
            <Link
              href='https://tvoe.live/'
              rel='noopener noreferrer'
              target='_blank'
              className='z-[1]'
            >
              <div className='flex-row flex mb-5'>
                <Image
                  src='/TvoeFullLogo.svg'
                  height={150}
                  width={150}
                  alt='Korolev Maksim'
                />
                <div className='p-3'>
                  <p className='text-white font-semibold text-xl'>Tvoe Live</p>
                  <p className='text-gray-500 text-[10px]'>
                    Online cinema. React JS/TS, NextJS, Redux Toolkit, SCSS
                    Modules, TailwindCSS, Ionic, Capacitor, VideoJS, React
                    Native
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link
              href='https://polyn.ai/'
              rel='noopener noreferrer'
              target='_blank'
              className='z-[1]'
            >
              <div className='flex-row flex mb-5'>
                <Image
                  src='/PolynLogo 1.svg'
                  height={150}
                  width={150}
                  alt='Korolev Maksim'
                />
                <div className='p-3'>
                  <p className='text-white font-semibold text-xl'>Polyn AI</p>
                  <p className='text-gray-500 text-[10px]'>
                    Developed a web application on Next.js that allows users to
                    apply for jobs, create job posts, and manage their company
                    profiles.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='row-start-2'>
            <Link
              href='https://vk.com/antipoff_group'
              rel='noopener noreferrer'
              target='_blank'
              className='z-[1]'
            >
              <div className='flex-row flex mb-5'>
                <Image
                  src='/antipiff 1.svg'
                  height={150}
                  width={150}
                  alt='Korolev Maksim'
                  className='rounded-lg'
                />
                <div className=' p-3 '>
                  <p className='text-white font-semibold text-xl'>
                    Antipoff Group
                  </p>
                  <p className='text-gray-500 text-[10px]'>
                    Developed the Verge Systems website using React.js.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='row-start-2'>
            <Link
              href='https://crypto-ton-demo.vercel.app'
              rel='noopener noreferrer'
              target='_blank'
              className='z-[1]'
            >
              <div className='flex-row flex mb-5'>
                <Image
                  src='/TurboTon.svg'
                  height={150}
                  width={150}
                  alt='Korolev Maksim'
                />
                <div className='p-3 '>
                  <p className='text-white font-semibold text-xl'>TurboTON</p>
                  <p className='text-gray-500 text-[10px]'>
                    Pet project. React TS, CSS, GSAP, Framer-motion, Redux
                    Toolkit
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='row-start-3'>
            <Link
              href='https://crypto-landing-roadmap.vercel.app/'
              rel='noopener noreferrer'
              target='_blank'
              className='z-[1]'
            >
              <div className='flex-row flex mb-5'>
                <Image
                  src='/money.gif'
                  height={100}
                  width={120}
                  alt='Korolev Maksim'
                  className=' mr-[32px]'
                />
                <div className='p-3 '>
                  <p className='text-white font-semibold text-xl'>
                    Crypto Roadmap
                  </p>
                  <p className='text-gray-500 text-[10px]'>
                    Pet project. React TS, TailwindCSS
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='row-start-3'>
            {' '}
            <Link
              href='https://ultimatevpn-demo.vercel.app'
              rel='noopener noreferrer'
              target='_blank'
              className='z-[1]'
            >
              <div className='flex-row flex mb-5'>
                <Image
                  src='/Vector2.svg'
                  height={90}
                  width={90}
                  alt='Korolev Maksim'
                  className=' mr-[62px]'
                />
                <div className='p-3 '>
                  <p className='text-white font-semibold text-xl'>
                    UltimateVPN
                  </p>
                  <p className='text-gray-500 text-[10px]'>
                    Pet project. React JS, NextJS, Framer-motion, TailwindCSS
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className='row-start-4'>
            {' '}
            <Link
              href='https://ai-landing-gamma.vercel.app'
              rel='noopener noreferrer'
              target='_blank'
              className='z-[1]'
            >
              <div className='flex-row flex mb-5'>
                <Image
                  src='/logosaas.png'
                  height={90}
                  width={100}
                  alt='Korolev Maksim'
                  className=' mr-[76px]'
                />
                <div className='p-3 '>
                  <p className='text-white font-semibold text-xl'>AI Landing</p>
                  <p className='text-gray-500 text-[10px]'>
                    Pet project. React TS, NextJS, Framer-motion, TailwindCSS
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
