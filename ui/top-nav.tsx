'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useContext } from 'react';
import { isHome } from '../public/Context';

export function TopNav({ stateProp }) {
  const [isOpen, setIsOpen] = stateProp;

  return (
    <nav className={clsx('bg-secondary-dark border-b-detail-dark border-b-4','w-full h-14 top-0 lg:sticky lg:ml-sidebar', {'fixed' : isOpen})}>
      <div className='grid grid-flow-col justify-stretch content-center h-full px-4'>
        <div className='judtify-self-start'>
          Aleksander Gogol
        </div>
        <div className={clsx('judtify-self-start', {'hidden' : useContext(isHome)})}>
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