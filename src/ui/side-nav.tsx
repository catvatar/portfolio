'use client'
import clsx from 'clsx';
import TagList from '../components/tag-list';
import { useContext } from 'react';
import { openContext } from '../lib/Context';
import AboutMeElement from '../components/about-me-element';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function SideNav({ posts }) {
  const [isOpen, setIsOpen] = useContext(openContext);

  return (
    <div className={clsx(
      //by default isOpen if false
      'fixed top-0 bg-secondary-light border-r-4 border-detail-dark bottom-0 z-auto', 
      'lg:block lg:w-sidebar',
      {
        'invisible lg:visible' : !isOpen,
        'fixed inset-x-0 bottom-0 top-14 bg-secondary-light' : isOpen, 
      },
    )}>
      <div className='p-8'>
        <section>
          <AboutMeElement />
        </section>
        <section className={clsx({'hidden' : useSelectedLayoutSegment() !== null})}>
          <TagList posts={posts} />
        </section>
      </div>
    </div>
  );
}