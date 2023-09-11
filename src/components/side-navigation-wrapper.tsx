'use client'

import clsx from "clsx"
import { useContext } from "react";
import { openContext } from "../lib/Context";

export default function SideNavigationigationWrapper({ children }){
  const [isOpen, setIsOpen] = useContext(openContext);
  return(<div className={clsx(
    //by default isOpen is false
    'fixed top-0 bg-secondary-light border-r-4 border-detail-dark bottom-0 z-auto', 
    'lg:block lg:w-sidebar-small xl:w-sidebar-large',
    {
      'invisible lg:visible' : !isOpen,
      'fixed inset-x-0 bottom-0 top-14 bg-secondary-light' : isOpen, 
    },
  )}>
    {children}
  </div>)
}