import Link from 'next/link';
import Image from 'next/image'
import TagElement from './tag-element';

export function BlogElement({
    id,
    title,
    tags,
    img,
    date,
  }){

  return (<>
      <div className='border-4 border-r-0 border-b-0 border-detail-dark h-58'>
        <div className='border-0 border-b-4 border-detail-dark h-2/3 grid grid-flow-col auto-cols-max gap-0 justify-items-start'>
          <Link className='border-0 border-r-4 w-64 border-detail-dark lg:w-80' href={`posts/${id}`}>
            <Image
              width={9999}
              height={0}
              src={img}
              alt={`${id}`}
            />
          </Link>
          <div className='border-0'>
            <ul className='grid grid-cols-1 gap-2 h-32 overflow-hidden lg:grid-cols-3'>
              {tags.map((item)=>{return(
                <TagElement key={item} tag={item} />
              )})}
            </ul>
          </div>
        </div>
        <section className='mx-2 pt-1 pb-2'>
          <Link href={`posts/${id}`}>
            <p>{title}</p>
            <p>{date}</p>
          </Link>
        </section>
      </div>
    </>
  );
}