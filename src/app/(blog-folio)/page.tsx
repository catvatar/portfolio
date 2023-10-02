import { getSortedPostsData } from "../../lib/posts";
import BlogsList from "../../components/blogs-list";

export default function Portfolio() {
  return (
    <>
      <BlogsList
        posts={getSortedPostsData().filter((post) => {
          return post.type == "portfolio";
        })}
      />
    </>
  );
}
