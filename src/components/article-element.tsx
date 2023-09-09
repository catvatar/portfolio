import Head from "next/head";

export default function ArticleElement({ postData }){
  return (<>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article className='prose md:prose-xl max-w-none prose-img:h-52'>
      <h1 className='flex justify-center'>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </>)
}