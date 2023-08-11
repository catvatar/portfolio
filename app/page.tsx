import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/blog-list';
import Layout from '../ui/layout';
import { PostsContextProvider } from '../lib/Context';

export default function Home() {
  const allPostsData:any = getSortedPostsData();

  return (
    <PostsContextProvider value={allPostsData}>
      <Layout home>
        <section>
          <ul>
            <BlogList posts={allPostsData} />
          </ul>
        </section>
      </Layout>
    </PostsContextProvider>
  );
}
