import TagsList from "../components/tags-list";
import AboutMeElement from "../components/about-me-element";
import { getUniqueTags } from "../lib/tags";
import BlogfolioSwitchElement from "../components/blogfolio-switch-element";
import SideNavigationigationWrapper from "../components/side-navigation-wrapper";
import { getSortedPostsData } from "../lib/posts";
import Break from "../components/break";

export default function SideNavigation() {
  const postsObjects = {
    portfolio: getSortedPostsData("portfolio"),
    blog: getSortedPostsData("blog"),
  };
  const uniqueTagsObjects = {
    portfolio: getUniqueTags(postsObjects.portfolio),
    blog: getUniqueTags(postsObjects.blog),
  };
  const availableRouts = {
    portfolio: postsObjects.portfolio.map((item) => item.id),
    blog: postsObjects.blog.map((item) => item.id),
  };
  return (
    <SideNavigationigationWrapper>
      <div className="p-8">
        <AboutMeElement />
        <Break />
        <TagsList
          portfolioTags={uniqueTagsObjects.portfolio}
          blogTags={uniqueTagsObjects.blog}
        />
      </div>
      <div className="absolute left-0 w-full p-8 lg:bottom-0">
        <Break />
        <BlogfolioSwitchElement availableRouts={availableRouts} />
      </div>
    </SideNavigationigationWrapper>
  );
}
