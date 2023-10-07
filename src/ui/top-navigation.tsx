import BackElement from "../components/back-element";
import MenuButton from "../components/menu-button";

export default function TopNavigation() {
  return (
    <div className="bg-primary-300 border-detail-500 grid h-14 w-auto grid-flow-col content-center justify-stretch border-l-4 px-4">
      <div className="judtify-self-start">Aleksander Gogol</div>
      <BackElement />
      <div className="justify-self-end">
        <MenuButton />
      </div>
    </div>
  );
}
