import { getSortedPostsData } from '../lib/posts';
import BlogList from '../lib/blog-list';
import Layout from '../lib/layout';
import { PostsContextProvider } from '../public/Context';

export default function Home() {
  const allPostsData:any = getSortedPostsData();

  return (
    <PostsContextProvider value={allPostsData}>
      <Layout home>
        <section>
          <ul>
            <BlogList param={allPostsData} />
          </ul>
        </section>
      </Layout>
    </PostsContextProvider>
  );
}
