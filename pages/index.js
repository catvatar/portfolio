import Head from 'next/head';
//import Layout, { siteTitle } from '../components/layout';
//import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
//import Date from '../components/date';


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
      <section className='bg-primary'>
        <p>[Your Self Introduction]</p>
        <div className="bg-teal-400 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-400 xl:bg-indigo-400 py-2 px-4 text-center">Resize window</div>
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
    </>
  );
}
