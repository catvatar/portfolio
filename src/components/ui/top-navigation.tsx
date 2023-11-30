import { Suspense } from "react";

import BackElement from "../back-element";
import { MenuButton } from "../menu-button";
import TopNavigationWrapper from "./top-navigation-wrapper";

export default function TopNavigation() {
  return (
    <TopNavigationWrapper>
      <div className="p-4 px-8">
        <div className="flex h-14 w-auto flex-row flex-nowrap items-stretch rounded-full bg-primary-300 shadow-xl">
          <div className="rounded-l-full border-8 border-primary-500 p-2 px-4">
            <div>Aleksander Gogol</div>
          </div>
          <BackElement>
            <div className="border-8 border-l-0 border-primary-500 p-2 px-8">
              Back
            </div>
          </BackElement>
          <Suspense
            fallback={
              <div className=" border-8 border-l-0 border-primary-500 p-2 px-8">
                Menu
              </div>
            }
          >
            <MenuButton>
              <div className="rounded-r-full border-8 border-l-0 border-primary-500 p-2 px-8">
                Menu
              </div>
            </MenuButton>
          </Suspense>
        </div>
      </div>
    </TopNavigationWrapper>
  );
}
