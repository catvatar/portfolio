'use client'
import Image from 'next/image';

export default function AboutMeElement(){
  return (
  <div className='grid grid-cols-2'>
    <Image
      src='/profile.png'
      width={9999}
      height={0}
      alt='test'
      className='border-4 border-detail-dark'
    />
    
    <div className='px-3 py-1'>
      <h1>O mnie</h1>
      <p>Jakiś tekst</p>
    </div>
  </div>)
}