import { getSortedPostsData } from '../../lib/posts';
import BlogsList from '../../components/blogs-list';

export default function Portfolio() {
  return (
    <section>
      <BlogsList posts = {getSortedPostsData()}/>
    </section>
  );
}
