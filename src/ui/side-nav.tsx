'use client'

import clsx from 'clsx';
import Image from 'next/image';
import TagList from '../components/tag-list';

export default function SideNav({ stateProp }) {
  const [isOpen, setIsOpen] = stateProp;

  return (
    <div className={clsx('fixed top-0 bg-secondary-light border-r-4 border-detail-dark bottom-0 z-auto w-sidebar', {'invisible lg:visible' : !isOpen})}>
      <div
        className={clsx(
          'lg:block',
          {'fixed inset-x-0 bottom-0 top-14 bg-secondary-light': isOpen, hidden: !isOpen,
        })}
      >
        <div className='p-8'>
          <section className='grid grid-cols-2'>
            <div className='mx-3 mb-4 border-4 border-detail-dark '>
              <Image
                src='/profile.png'
                width={9999}
                height={0}
                alt='test'
              />
            </div>
            
            <div>
              <h1>O mnie</h1>
              <p>Jakiś tekst</p>
            </div>
            <hr className='border-black mb-3 col-span-full' />
          </section>
          <section>
            <TagList />
          </section>
        </div>
      </div>
    </div>
  );
}