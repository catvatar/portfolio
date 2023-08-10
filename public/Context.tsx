'use client'

import { createContext } from 'react';

export const isHome = createContext(false);
export const postsContext = createContext(null);

export function PostsContextProvider({ children, value }) {
  return <postsContext.Provider value={value}>{children}</postsContext.Provider>
}

export function IsHomeProvider({ children, value }) {
  return <isHome.Provider value={value}>{children}</isHome.Provider>
}