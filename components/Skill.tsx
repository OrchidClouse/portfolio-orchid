import React from 'react';

export default function Skill({ title }: { title: string }) {
  return (
    <div className='bg-transparent text-nowrap mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max'>
      {title}
    </div>
  );
}
