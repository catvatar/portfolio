'use client'

import { createContext, useState } from 'react';

export const tagsContext = createContext<any>(null);

export const openContext = createContext<any>(null);

export function TagsContextProvider({ children }) {
  const tagsStateObject = useState<string[]>([]);
  return <tagsContext.Provider value={tagsStateObject}>{children}</tagsContext.Provider>
}

export function OpenContextProvider({ children }) {
  const openStateObject = useState<boolean>(false);
  return <openContext.Provider value={openStateObject}>{children}</openContext.Provider>
}