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
      <div className="flex h-full flex-auto flex-col">
        <div className="flex flex-auto flex-col p-8">
          <AboutMeElement />
          <Break />
          <TagsList tags={uniqueTagsObjects} />
          <PostsTags posts={posts} />
        </div>
        <div className="p-8 pb-12">
          <div className="left-0 h-8 self-end">
            <Break />
            <BlogfolioSwitchElement posts={posts} />
          </div>
        </div>
      </div>
    </SideNavigationigationWrapper>
  );
}
