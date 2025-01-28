'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Banner: React.FC<{}> = () => {
  const router = useRouter();
  return (
    <div className='flex flex-row items-center justify-center px-20 mt-[100px] z-[20] '>
      <div className='flex flex-col  justify-center  text-center'>
        <div className='justify-center flex '>
          <Image
            priority
            src='/Me.png'
            height={250}
            width={250}
            alt='Korolev Maksim'
          />
        </div>

        <div className='flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto'>
          Maksim Korolev!
        </div>
        <div className='flex justify-center'>
          <p className='text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]'>
            I do Code &{' '}
            <span className='text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400'>
              Chill
            </span>
          </p>
          <Image
            src='/popcorn.gif'
            height={50}
            width={50}
            alt='Korolev Maksim'
          />
        </div>

        <p className='text-md text-gray-200 my-5 max-w-[600px]'>
          Passionate Software Engineer with a focus on React development,
          dedicated to crafting elegant and user-friendly web applications.
        </p>
        <div className='text-md flex justify-center'>
          <Link
            href={'https://t.me/OrchidClouse'}
            target='_blank'
            className=' z-[1] padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent '
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
