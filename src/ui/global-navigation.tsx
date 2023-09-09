import TopNavigation from './top-navigation';
import SideNavigation from './side-navigation';
import { OpenContextProvider } from '../lib/Context';

export function GlobalNavigation({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <OpenContextProvider>
          <SideNavigation />
          <div className='md:ml-sidebar-small'>
            <TopNavigation />
          </div>
      </OpenContextProvider>
      <div className='md:ml-sidebar-small'>
        {children}
      </div>
    </>
  );
}