import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/blog-list';
import Layout from '../ui/layout';
import { PostsContextProvider } from '../lib/Context';

function validatePosts( posts ) : Post[]{
  if(!posts){
    throw 'Failed to load posts';
  }
  const requiredProperties = ['id','title','tags','img','date'];

  return posts.filter(post => {
    if(requiredProperties.every(property => property in post)){
      return true;
    }
    console.error('Missing property on post: ', post.id,);
    return false;
  });
}

export default function Home() {
  const allPostsData = validatePosts(getSortedPostsData());

  return (
    <PostsContextProvider value={allPostsData}>
      <Layout home>
        <section>
          <ul>
            <BlogList />
          </ul>
        </section>
      </Layout>
    </PostsContextProvider>
  );
}
