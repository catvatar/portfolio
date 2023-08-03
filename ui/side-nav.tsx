'use client';

import clsx from 'clsx';
import { isHome } from '../public/Context';
import { useContext } from 'react';

export function SideNav({ stateProp }) {
  const [isOpen, setIsOpen] = stateProp;
  const root = useContext(isHome);

  return (
    <div className={clsx('fixed top-0 bg-secondary border-r-4 border-detail bottom-0 z-auto w-sidebar', {'invisible lg:visible' : !isOpen})}>
      <div
        className={clsx(
          'lg:block',
          {'fixed inset-x-0 bottom-0 top-14 bg-secondary': isOpen,
          hidden: !isOpen,
        })}
      >
        <div className='px-8 py-8'>
          <h1>List:</h1>
          <p>Items</p>
        </div>
      </div>
    </div>
  );
}