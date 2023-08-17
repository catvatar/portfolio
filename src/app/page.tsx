import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/blog-list';

export default function Home() {
  return (
    <section>
      <BlogList posts = {getSortedPostsData()}/>
    </section>
  );
}
