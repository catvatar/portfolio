import Head from "next/head";

export default function ArticleElement({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="prose max-w-none md:prose-xl prose-img:h-52">
        <h1 className="flex justify-center">{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className="flex justify-center">
        <p className="text-sm text-gray-500">{postData.date}</p>
      </div>
    </>
  );
}
