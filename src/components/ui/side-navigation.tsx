import TagsList from "../tags-list";
import AboutMeElement from "../about-me-element";
import { getUniqueTags } from "../../lib/tags";
import BlogfolioSwitchElement from "../blogfolio-switch-element";
import SideNavigationigationWrapper from "./side-navigation-wrapper";
import { getSortedPostsData } from "../../lib/posts";
import Break from "../utility/break";
import PostsTags from "../posts-tags-element";
import Margin from "../utility/margin";

//pixel w menu na telefonie

export default function SideNavigation() {
  const posts = getSortedPostsData();
  const uniqueTagsObjects = getUniqueTags(posts);
  return (
    <SideNavigationigationWrapper>
      <div className="border-detail-dark fixed bottom-0 top-14 border-r-0 lg:block lg:w-sidebar-small xl:w-sidebar-large">
        <div className="flex h-full flex-auto flex-col">
          <div className="flex flex-auto flex-col">
            <Margin magnitude={8}>
              <AboutMeElement />
              <Break />
              <TagsList tags={uniqueTagsObjects} />
              <PostsTags posts={posts} />
            </Margin>
          </div>
          <Margin magnitude={8}>
            <div className="w-full self-end">
              <Break />
              <BlogfolioSwitchElement posts={posts} />
            </div>
          </Margin>
        </div>
      </div>
    </SideNavigationigationWrapper>
  );
}
