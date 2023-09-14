import ArticleElement from "../../../../../components/article-element";
import { getAllPostIds, getPostData } from "../../../../../lib/posts";

export async function generateStaticParams() {
  const paths = getAllPostIds("blog");
  return paths;
}

export default async function Post({ params }) {
  const postData: any = await getPostData(params.id, "blog");
  return <ArticleElement postData={postData} />;
}
