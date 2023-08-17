'use client'

import { createContext, useState } from 'react';

export const postsContext = createContext<any>(null);

export const tagsContext = createContext<any>(null);

export const openContext = createContext<any>(null);

export function PostsContextProvider({ children, value }) {
  return <postsContext.Provider value={value}>{children}</postsContext.Provider>
}

export function TagsContextProvider({ children }) {
  const [tagsState, setTagsState] = useState<string[]>([]);
  return <tagsContext.Provider value={[tagsState, setTagsState]}>{children}</tagsContext.Provider>
}

export function OpenContextProvider({ children }) {
  const [openState, setOpenState] = useState<boolean>(false);
  return <openContext.Provider value={[openState, setOpenState]}>{children}</openContext.Provider>
}