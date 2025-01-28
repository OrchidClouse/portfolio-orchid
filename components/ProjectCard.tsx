import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IProject {
  url: string;
  image: string;
  title: string;
  stack: string;
}

export function ProjectCard({
  url = '',
  image = '',
  title = '',
  stack = '',
}: IProject) {
  return (
    <Link
      href={url}
      rel='noopener noreferrer'
      target='_blank'
      className='z-[1]'
    >
      <div className='flex flex-row mb-5 items-center justify-center'>
        <div className='relative w-[120px] h-[120px] overflow-hidden rounded-md'>
          <Image src={image} alt={title} layout='fill' objectFit='contain' />
        </div>
        <div className='flex-1 pl-4'>
          <p className='text-white font-semibold text-xl'>{title}</p>
          <p className='text-gray-500 text-[10px]'>{stack}</p>
        </div>
      </div>
    </Link>
  );
}
