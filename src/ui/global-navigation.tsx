import TopNavigation from './top-navigation';
import SideNavigation from './side-navigation';
import { OpenContextProvider } from '../lib/Context';
import { getSortedPostsData } from '../lib/posts';

export function GlobalNavigation({ children }:{ children: React.ReactNode }) {
  return (
    <>
      <OpenContextProvider>
          <SideNavigation posts={getSortedPostsData('portfolio')} />
          <div className='lg:ml-sidebar'>
            <TopNavigation />
          </div>
      </OpenContextProvider>
      <div className='lg:ml-sidebar'>
        {children}
      </div>
    </>
  );
}