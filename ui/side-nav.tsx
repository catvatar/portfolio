import clsx from 'clsx';
import Image from 'next/image';
import { postsContext } from '../public/Context';
import { useContext } from 'react';
import { useState } from 'react';

export function SideNav({ stateProp }) {
  const [isOpen, setIsOpen] = stateProp;
  const postData = useContext(postsContext);
  
  const uniqueTags = postData?postData.reduce((acc, tags) => {
    return [...acc, ...tags.tags.filter((tag) => {
      return !acc.includes(tag);
    })];
  },[]):[];

  const [clickedTags, setClickedTags] = useState(uniqueTags.map(item=>{return {
    tag:item,
    clicked:false,
  }}));

  return (
    <div className={clsx('fixed top-0 bg-secondary-light border-r-4 border-detail-dark bottom-0 z-auto w-sidebar', {'invisible lg:visible' : !isOpen})}>
      <div
        className={clsx(
          'lg:block',
          {'fixed inset-x-0 bottom-0 top-14 bg-secondary-light': isOpen,
          hidden: !isOpen,
        })}
      >
        <div className='px-8 py-8'>
          <section>
            <div className='px-3 pb-4'>
              <Image
                src='/template-gradient.png'
                width={9999}
                height={0}
                alt='test'
              />
            </div>
            
            <h1>O mnie</h1>
            <p>Jakiś tekst</p>
            <hr className='border-black border-2 my-3' />
          </section>
          <section>
            <ul className='grid grid-cols-4 lg:grid-cols-3 gap-1'>
              {clickedTags.map(({tag, clicked})=>{return <li className={clsx('col-auto text-black hover:text-white',{'text-detail-dark':clicked})} key={tag} onClick={()=>{
                setClickedTags(clickedTags.map(item=>{
                  return item.tag===tag?{tag:tag,clicked:!item.clicked,}:item;
                }));
              }}>{tag}</li>})}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}