import { Metadata } from "next";
import { TagsContextProvider } from "../../lib/Context";
import { getSortedPostsData } from "../../lib/posts";
import SideNavigation from "../../components/ui/side-navigation";
import TopNavigation from "../../components/ui/top-navigation";
import Margin from "../../components/utility/margin";

export const metadata: Metadata = {
  title: "Aleksander Gogol Portfolio",
  description: "Portfolio Aleksander Gogol",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allPostsData = getSortedPostsData();

  return (
    <section>
      <TagsContextProvider allPostsData={allPostsData}>
        <SideNavigation />
        <div className="sticky top-0">
          <TopNavigation />
        </div>
        <div className="lg:pl-sidebar-small xl:pl-sidebar-large">
          <Margin magnitude={8}>{children}</Margin>
        </div>
      </TagsContextProvider>
    </section>
  );
}
