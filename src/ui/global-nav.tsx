import TopNav from './top-nav';
import SideNav from './side-nav';
import { OpenContextProvider } from '../lib/Context';
import { getSortedPostsData } from '../lib/posts';

export function GlobalNav({ children }:{ children: React.ReactNode }) {
  return (
    <OpenContextProvider>
        <SideNav posts={getSortedPostsData()} />
        <div className='lg:ml-sidebar'>
          <TopNav />
          {children}
        </div>
    </OpenContextProvider>
  );
}