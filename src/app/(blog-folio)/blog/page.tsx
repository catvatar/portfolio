import BlogsList from "../../../components/blogs-list";
import { getSortedPostsData } from "../../../lib/posts";

export default function Blog() {
  return (
    <>
      <BlogsList posts={getSortedPostsData("blog")} />
    </>
  );
}
