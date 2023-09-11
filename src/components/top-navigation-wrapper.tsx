'use client'

import clsx from "clsx";
import { useContext } from "react";
import { openContext } from "../lib/Context";

export default function TopNavigationWrapper({ children }){
  const [isOpen, setIsOpen] = useContext(openContext);
  return (<nav className={clsx(
    'bg-secondary-dark border-b-detail-dark border-b-4 w-auto h-14', 
    {'w-full' : isOpen})}
  >
    {children}
  </nav>)
}