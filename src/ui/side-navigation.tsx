import TagsList from "../components/tags-list";
import AboutMeElement from "../components/about-me-element";
import { getUniqueTags } from "../lib/tags";
import BlogfolioSwitchElement from "../components/blogfolio-switch-element";
import SideNavigationigationWrapper from "../components/side-navigation-wrapper";
import { getSortedPostsData } from "../lib/posts";
import Break from "../components/break";
import PostsTags from "../components/posts-tags-element";

//pixel w menu na telefonie

export default function SideNavigation() {
  const posts = getSortedPostsData();
  const uniqueTagsObjects = getUniqueTags(posts);
  return (
    <SideNavigationigationWrapper>
      <div className="p-8">
        <AboutMeElement />
        <Break />
        <TagsList tags={uniqueTagsObjects} />

        <div className="overflow-hidden">
          <PostsTags posts={posts} />
        </div>
      </div>
      <div className="absolute left-0 w-full overflow-hidden p-8 lg:bottom-0">
        <Break />
        <BlogfolioSwitchElement posts={posts} />
      </div>
    </SideNavigationigationWrapper>
  );
}
