import TopNav from './top-nav';
import SideNav from './side-nav';
import { OpenContextProvider } from '../lib/Context';
import { getSortedPostsData } from '../lib/posts';

export function GlobalNav() {
  return (
    <OpenContextProvider>
        <SideNav posts={getSortedPostsData()} />
        <TopNav />
    </OpenContextProvider>
  );
}