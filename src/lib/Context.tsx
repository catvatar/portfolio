'use client'

import { createContext, useState } from 'react';

export const isHome = createContext<boolean>(false);
export const postsContext = createContext<any>(null);

export const tagsContext = createContext<any>(null);

export function PostsContextProvider({ children, value }) {
  return <postsContext.Provider value={value}>{children}</postsContext.Provider>
}

export function IsHomeProvider({ children, value }) {
  return <isHome.Provider value={value}>{children}</isHome.Provider>
}

export function TagsContextProvider({ children}) {
  const [tagsState, setTagsState] = useState<string[]>([]);
  return <tagsContext.Provider value={[tagsState, setTagsState]}>{children}</tagsContext.Provider>
}