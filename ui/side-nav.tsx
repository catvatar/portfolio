'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { isHome } from '../public/Context';
import { useContext } from 'react';

export function SideNav({ stateProp }) {
  const [isOpen, setIsOpen] = stateProp;
  const root = useContext(isHome);
  console.log('Top Nav:', root);

  return (
    <nav className={clsx('bg-secondary border-b-detail border-b-4','w-full h-14 top-0 lg:sticky', {'fixed' : isOpen})}>
      <div className='grid grid-flow-col justify-stretch content-center h-full px-4'>
        <div className='judtify-self-start'>
          Aleksander Gogol
        </div>
        <div className={clsx('judtify-self-start', {'hidden' : root})}>
          <Link
            href="/"
          >
            Back
          </Link>
        </div>
        <div className='flex justify-end'>
          <button
            type="button"
            className="group lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="group-hover:text-gray-400">
              Menu
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}