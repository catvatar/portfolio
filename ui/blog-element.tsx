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
      <div className='border-4 border-r-0 border-b-0 border-detail h-44'>
        <div className='border-0 border-b-4 border-detail h-2/3 grid grid-flow-col auto-cols-max gap-0 justify-items-start'>
          <div className='border-0 border-r-4 relative border-detail'>
            <Image
              className='object-cover h-full w-full'
              src={img}
              fill={true}
              alt='img'
            />
          </div>
          <div className='border-0'>
            <ul className='grid grid-cols-2 gap-0'>
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