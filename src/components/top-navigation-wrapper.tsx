'use client'

import clsx from "clsx";
import { useContext } from "react";
import { openContext } from "../lib/Context";

export default function TopNavigationWrapper({ children }){
  const [isOpen, setIsOpen] = useContext(openContext);
  return (<nav className={clsx(
    'bg-secondary-dark border-b-detail-dark border-b-4 w-auto h-14 top-0 md:sticky', 
    {'fixed w-full' : isOpen})}
  >
    <div className='grid grid-flow-col justify-stretch content-center h-full px-4'>
      {children}
      <div className='flex justify-end'>
        <button
          type="button"
          className="group md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="group-hover:text-gray-400">
            Menu
          </div>
        </button>
      </div>
    </div>
  </nav>)
}