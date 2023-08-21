'use client'
import clsx from 'clsx';
import TagsList from '../components/tags-list';
import AboutMeElement from '../components/about-me-element';
import { useContext } from 'react';
import { openContext } from '../lib/Context';
import { useSelectedLayoutSegment } from 'next/navigation';
import { getUniqueTags } from '../lib/tags';
import BlogfolioSwitchElement from '../components/blogfolio-switch-element';

export default function SideNavigation({ posts }) {
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
          <TagsList tags={getUniqueTags(posts)} />
        </section>
        <section className='absolute bottom-4 left-0 px-8 w-full'>
          <BlogfolioSwitchElement />
        </section>
      </div>
    </div>
  );
}