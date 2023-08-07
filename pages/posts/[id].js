import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import RootLayout from '../../app/layout'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <RootLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='prose lg:prose-xl max-w-none prose-img:h-52'>
        <h1 className='flex justify-center'>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </RootLayout>
  );
}


