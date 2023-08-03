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
        <title>siteTitle</title>
      </Head>
      <div className='lg:ml-sidebar bg-primary flex justify-center'>
        <div className='w-5/6'>
          <div className="bg-teal-400 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-400 xl:bg-indigo-400 w-full py-2 px-4 text-center">Resize window</div>
          <br />
          <section>
            <h2>Blogs</h2>
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
          <section className=''>
            <p>[Your Self Introduction]</p>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
          </section>
          <section>
            <h2>Blog</h2>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                </li>
              ))}
            </ul>
          </section>
          <section>
            <div className="w-screen h-screen bg-primary"></div>
            <div className="w-screen h-screen bg-secondary"></div>
          </section>
        </div>
      </div>
    </>
  );
}
