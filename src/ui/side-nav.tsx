'use client'
import clsx from 'clsx';
import TagList from '../components/tag-list';
import { useContext } from 'react';
import { openContext } from '../lib/Context';
import AboutMeElement from '../components/about-me-element';

export default function SideNav() {
  const [isOpen, setIsOpen] = useContext(openContext);

  return (
    <div className={clsx('fixed top-0 bg-secondary-light border-r-4 border-detail-dark bottom-0 z-auto w-sidebar', {'invisible lg:visible' : !isOpen})}>
      <div className={clsx(
        'lg:block',
        {'fixed inset-x-0 bottom-0 top-14 bg-secondary-light': isOpen, hidden: !isOpen,}
      )}>
        <div className='p-8'>
          <section>
            <AboutMeElement />
          </section>
          <section>
            <TagList />
          </section>
        </div>
      </div>
    </div>
  );
}