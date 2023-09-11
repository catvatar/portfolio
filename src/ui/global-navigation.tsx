import TopNavigation from './top-navigation';
import SideNavigation from './side-navigation';
import { OpenContextProvider } from '../lib/Context';

export function GlobalNavigation({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <OpenContextProvider>
          <SideNavigation />
          {/* small screen transparent? */}
          <div className='sticky top-0 lg:ml-sidebar-small xl:ml-sidebar-large'>
            <TopNavigation />
          </div>
      </OpenContextProvider>
      <div className='lg:ml-sidebar-small xl:ml-sidebar-large'>
        {children}
      </div>
    </>
  );
}