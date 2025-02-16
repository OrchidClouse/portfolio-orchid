'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a
          title='logo'
          href='/'
          className='h-auto w-auto flex flex-row items-center bg-white rounded-lg p-2'
        >
          <Image
            src='/newlogo.svg'
            alt='Maksim Korolev - Developer'
            width={81}
            height={64}
          />
        </a>

        <div className='flex flex-row gap-5'>
          <Link
            href={'https://t.me/OrchidClouse'}
            target='_blank'
            className=' z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5'
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
