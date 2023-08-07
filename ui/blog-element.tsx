import Link from 'next/link';
import Image from 'next/image'
import img from '../public/template-gradient.png'

export function BlogElement({
    postPath,
    postTitle,
    postTags,
  }) {
  return (
    <Link
      href={`${postPath}`}
    >
      <div className='border-4 border-r-0 border-b-0 border-detail-dark h-58'>
        <div className='border-0 border-b-4 border-detail-dark h-2/3 grid grid-flow-col auto-cols-max gap-0 justify-items-start'>
          <div className='border-0 border-r-4 w-64 border-detail-dark'>
            <Image
              height={0}
              src={img}
              alt='img'
            />
          </div>
          <div className='border-0'>
            <ul className='grid grid-cols-1 gap-2 h-32 overflow-hidden lg:grid-cols-3'>
              {postTags.map((tag)=>{return(
                <li key={tag}> 
                  {tag}
                </li>
              )})}
            </ul>
          </div>
        </div>
        {postTitle}
      </div>
    </Link>
  );
}