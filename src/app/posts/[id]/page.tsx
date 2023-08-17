import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Layout from '../../../ui/layout'

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }


export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function Post({ params }) {
  const postData:any = await getPostData(params.id);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='prose lg:prose-xl max-w-none prose-img:h-52'>
        <h1 className='flex justify-center'>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}


