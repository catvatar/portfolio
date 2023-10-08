import BackElement from "../components/back-element";
import MenuButton from "../components/menu-button";
import TopNavigationWrapper from "../components/top-navigation-wrapper";

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
