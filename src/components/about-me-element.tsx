'use client'
import Image from 'next/image';

export default function AboutMeElement(){
  return (<div className='grid grid-cols-2'>
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
  </div>)
}