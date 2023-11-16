import { Suspense } from "react";

import BackElement from "../back-element";
import { MenuButton, MenuButtonFallback } from "../menu-button";
import TopNavigationWrapper from "./top-navigation-wrapper";
import Margin from "../utility/margin";

export default function TopNavigation() {
  return (
    <TopNavigationWrapper>
      <div className="flex h-14 w-auto flex-row flex-nowrap items-center bg-primary-300 px-4">
        <Margin magnitude={8}>
          <div>Aleksander Gogol</div>
        </Margin>
        <Margin magnitude={8}>
          <BackElement />
        </Margin>
        <Margin magnitude={8}>
          <Suspense fallback={<MenuButtonFallback />}>
            <MenuButton />
          </Suspense>
        </Margin>
      </div>
    </TopNavigationWrapper>
  );
}
