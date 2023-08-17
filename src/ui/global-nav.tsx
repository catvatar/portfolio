'use client';

import { useState } from 'react';
import { TopNav } from './top-nav';
import SideNav from './side-nav';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <SideNav stateProp={ [isOpen, setIsOpen] }/>
        <TopNav stateProp={ [isOpen, setIsOpen] }/>
    </>
  );
}