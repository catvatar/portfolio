import Link from 'next/link';

export function BlogElement({
    postPath,
    postTitle,
    postTags,
    id,
  }) {
  return (
    <Link
      href={`${postPath}`}
    >
      <div className='border-4 border-r-0 border-b-0 border-detail h-44'>
        <div className='border-0 border-b-4 border-detail h-2/3 grid grid-flow-col auto-cols-max gap-0 justify-items-start'>
          <div className='border-0 border-r-4 border-detail'>
            <div className='h-full w-32 bg-black'>

            </div>
          </div>
          <div className='border-0 grid grid-cols-2 gap-4'>
            <ul>
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