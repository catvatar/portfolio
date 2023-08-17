import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/blog-list';
import { PostsContextProvider } from '../lib/Context';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <PostsContextProvider value={allPostsData}>
      <section>
        <ul>
          <BlogList />
        </ul>
      </section>
    </PostsContextProvider>
  );
}
