import TagsList from '../components/tags-list';
import AboutMeElement from '../components/about-me-element';
import { getUniqueTags } from '../lib/tags';
import BlogfolioSwitchElement from '../components/blogfolio-switch-element';
import SideNavigationigationWrapper from '../components/side-navigation-wrapper';
import { getSortedPostsData } from '../lib/posts';

export default function SideNavigation() {
  const uniquePortfolioTags = getUniqueTags(getSortedPostsData('portfolio'));
  const uniqueBlogTags = getUniqueTags(getSortedPostsData('blog'));
  return (
    <SideNavigationigationWrapper>
      <div className='p-8'>
        <section>
          <AboutMeElement />
        </section>
        <section>
          <TagsList portfolioTags={uniquePortfolioTags} blogTags={uniqueBlogTags} />
        </section>
        <section className='absolute bottom-8 left-0 px-8 w-full'>
          <BlogfolioSwitchElement />
        </section>
      </div>
    </SideNavigationigationWrapper>
  );
}