import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import { BlogElement } from '../ui/blog-element';
import RootLayout from '../app/layout';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <RootLayout home>
      <Head>
        <title>Aleksander Portfolio</title>
      </Head>
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
    </RootLayout>
  );
}
