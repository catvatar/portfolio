import BackElement from "../back-element";
import MenuButton from "../menu-button";
import TopNavigationWrapper from "./top-navigation-wrapper";

export default function TopNavigation() {
  return (
    <TopNavigationWrapper>
      <div className="judtify-self-start">Aleksander Gogol</div>
      <BackElement />
      <div className="justify-self-end">
        <MenuButton />
      </div>
    </TopNavigationWrapper>
  );
}
