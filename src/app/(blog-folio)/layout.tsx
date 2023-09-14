import { Metadata } from "next";
import { GlobalNavigation } from "../../ui/global-navigation";
import { TagsContextProvider } from "../../lib/Context";
import { getSortedPostsData } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Aleksander Gogol Portfolio",
  description: "Portfolio Aleksander Gogol",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allPostsData = getSortedPostsData("portfolio");

  return (
    <section>
      <TagsContextProvider allPostsData={allPostsData}>
        <GlobalNavigation>
          <div className="px-16 py-8">{children}</div>
        </GlobalNavigation>
      </TagsContextProvider>
    </section>
  );
}
