import BackElement from "../components/back-element";
import MenuButton from "../components/menu-button";

export default function TopNavigation() {
  return (
    <div className="grid h-14 w-auto grid-flow-col content-center justify-stretch border-b-4 border-detail-300 bg-secondary-500 px-4">
      <div className="judtify-self-start">Aleksander Gogol</div>
      <BackElement />
      <div className="justify-self-end">
        <MenuButton />
      </div>
    </div>
  );
}
