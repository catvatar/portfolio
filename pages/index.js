import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { BlogElement } from '../ui/blog-element';


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
    <>
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
      <br />
      <div className="bg-teal-400 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-400 xl:bg-indigo-400 w-full py-2 px-4 text-center">Resize window</div>
      <br />
    </>
  );
}
