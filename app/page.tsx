import { getSortedPostsData } from '../lib/posts';
import { BlogElement } from '../ui/blog-element';
import Layout from '../lib/layout';
import { PostsContextProvider } from '../public/Context';

export default function Home() {
  const allPostsData:any = getSortedPostsData();

  return (
    <PostsContextProvider value={allPostsData}>
      <Layout home>
        <section>
          <ul>
            {allPostsData.map(({ id, tags, title }) => (
              <li key={id}>
                <BlogElement postPath={`/posts/${id}`} postTags={tags} postTitle={title} />
                <br />
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </PostsContextProvider>
  );
}
