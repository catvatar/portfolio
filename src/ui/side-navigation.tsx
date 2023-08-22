import TagsList from '../components/tags-list';
import AboutMeElement from '../components/about-me-element';
import { getUniqueTags } from '../lib/tags';
import BlogfolioSwitchElement from '../components/blogfolio-switch-element';
import SideNavigationigationWrapper from '../components/side-navigation-wrapper';
import { getSortedPostsData } from '../lib/posts';

export default function SideNavigation() {
  const postsObjects = {portfolio : getSortedPostsData('portfolio'), blog : getSortedPostsData('blog')};
  const uniqueTagsObjects = {portfolio : getUniqueTags(postsObjects.portfolio), blog : getUniqueTags(postsObjects.blog)};
  const availableRouts = {portfolio : postsObjects.portfolio.map(item => item.id), blog : postsObjects.blog.map(item => item.id)};
  return (
    <SideNavigationigationWrapper>
      <div className='p-8'>
        <section>
          <AboutMeElement />
        </section>
        <section>
          <TagsList portfolioTags={uniqueTagsObjects.portfolio} blogTags={uniqueTagsObjects.blog} />
        </section>
        <section className='absolute bottom-8 left-0 px-8 w-full'>
          <BlogfolioSwitchElement availableRouts={availableRouts} />
        </section>
      </div>
    </SideNavigationigationWrapper>
  );
}