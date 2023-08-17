import TopNav from './top-nav';
import SideNav from './side-nav';
import { OpenContextProvider, PostsContextProvider } from '../lib/Context';
import { getSortedPostsData } from '../lib/posts';

export function GlobalNav() {
  return (
    <OpenContextProvider>
        <PostsContextProvider value={getSortedPostsData()}>
          <SideNav />
        </PostsContextProvider>
        <TopNav />
    </OpenContextProvider>
  );
}