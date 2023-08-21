import BlogsList from "../../../components/blogs-list";
import { getSortedPostsData } from "../../../lib/posts";

export default function Blog(){
  return(
    <section>
      <BlogsList posts = {getSortedPostsData('blog')}/>
    </section>
  )
}