'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useContext } from 'react';
import { openContext } from '../lib/Context';

export default function TopNav() {
  const [isOpen, setIsOpen] = useContext(openContext);

  return (
    <nav className={clsx(
      'bg-secondary-dark border-b-detail-dark border-b-4 w-full h-14 top-0 lg:sticky lg:ml-sidebar', 
      {'fixed' : isOpen})}
    >
      <div className='grid grid-flow-col justify-stretch content-center h-full px-4'>
        <div className='judtify-self-start'>
          Aleksander Gogol
        </div>
        <div className={clsx('judtify-self-start', {'hidden' : useSelectedLayoutSegment() === null})}>
          <Link href="/">
            <div className="hover:text-gray-400">
              Back
            </div>
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