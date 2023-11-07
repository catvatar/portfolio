import TopNavigation from "./top-navigation";
import SideNavigation from "./side-navigation";
import { OpenContextProvider } from "../../lib/Context";

export function GlobalNavigation({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OpenContextProvider>
        <SideNavigation />
        {/* small screen transparent? */}
        <div className="sticky top-0">
          <TopNavigation />
        </div>
      </OpenContextProvider>
      <div className="lg:pl-sidebar-small xl:pl-sidebar-large">{children}</div>
    </>
  );
}
